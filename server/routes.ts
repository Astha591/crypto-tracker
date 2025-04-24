import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { WebSocketServer, WebSocket } from "ws";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);
  
  // Create WebSocket server on a distinct path to avoid conflicts with Vite HMR
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  // Track all connected clients
  const clients = new Set<WebSocket>();

  // WebSocket connection handler
  wss.on('connection', (ws) => {
    log('WebSocket client connected', 'websocket');
    clients.add(ws);
    
    // Send initial message
    ws.send(JSON.stringify({ 
      type: 'connection', 
      message: 'Connected to WebSocket server', 
      timestamp: new Date().toISOString() 
    }));

    // Handle client messages
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        log(`Received message: ${JSON.stringify(data)}`, 'websocket');
      } catch (error) {
        log(`Error parsing message: ${message}`, 'websocket');
      }
    });

    // Handle disconnection
    ws.on('close', () => {
      log('WebSocket client disconnected', 'websocket');
      clients.delete(ws);
    });
  });

  // Function to broadcast to all connected clients
  const broadcast = (message: any) => {
    const messageStr = JSON.stringify(message);
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageStr);
      }
    });
  };

  // Send crypto price updates to clients every 2 seconds
  setInterval(() => {
    if (clients.size > 0) {
      broadcast({
        type: 'update',
        timestamp: new Date().toISOString(),
        message: 'Crypto prices updated'
      });
      log(`Broadcasted price update to ${clients.size} clients`, 'websocket');
    }
  }, 2000);

  // Setup a simple API endpoint for demo
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', clients: clients.size });
  });

  return httpServer;
}
