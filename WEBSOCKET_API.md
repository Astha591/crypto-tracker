# WebSocket API Documentation

This document provides details on how to interact with the WebSocket API for the cryptocurrency price tracker.

## Connection

Connect to the WebSocket server at:
```
ws://[domain]/ws
```

For secure connections:
```
wss://[domain]/ws
```

## Message Format

All messages are sent as JSON objects.

### Subscribe to Updates

Send this message to start receiving crypto price updates:

```json
{
  "type": "subscribe",
  "channel": "crypto"
}
```

### Message Types Received

#### 1. Connection Confirmation

When you first connect, you'll receive:

```json
{
  "type": "connection",
  "message": "Connected to WebSocket server",
  "timestamp": "2025-04-24T10:36:07.158Z"
}
```

#### 2. Price Updates

You'll receive regular updates with:

```json
{
  "type": "update",
  "timestamp": "2025-04-24T10:36:08.222Z",
  "message": "Crypto prices updated"
}
```

After receiving this message, you should fetch the latest data from the Redux store, which will be automatically updated.

## Error Handling

If the WebSocket connection fails, the client automatically falls back to interval-based updates.

## Implementing on the Client

Example JavaScript implementation:

```javascript
const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const wsUrl = `${protocol}//${window.location.host}/ws`;
const socket = new WebSocket(wsUrl);

socket.onopen = () => {
  console.log("Connected to WebSocket server");
  // Subscribe to crypto updates
  socket.send(JSON.stringify({ type: "subscribe", channel: "crypto" }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Message from server:", data);
  
  if (data.type === "update") {
    // Update your UI with new crypto data
  }
};

socket.onclose = () => {
  console.log("WebSocket connection closed");
  // Implement fallback mechanism
};

socket.onerror = (error) => {
  console.error("WebSocket error:", error);
  // Handle error appropriately
};
```