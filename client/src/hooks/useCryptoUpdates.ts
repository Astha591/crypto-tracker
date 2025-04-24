import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoPrices } from '@/store/cryptoSlice';

export default function useCryptoUpdates(fallbackInterval = 2000) {
  const dispatch = useDispatch();
  const socketRef = useRef<WebSocket | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Attempt to connect to WebSocket
    const connectWebSocket = () => {
      try {
        // Determine the correct protocol based on the current connection
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/ws`;
        
        // Create WebSocket connection
        const socket = new WebSocket(wsUrl);
        socketRef.current = socket;
        
        // Connection opened
        socket.addEventListener('open', (event) => {
          console.log('Connected to WebSocket server');
          socket.send(JSON.stringify({ type: 'subscribe', channel: 'crypto' }));
          
          // Clear fallback interval if it was running
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        });
        
        // Listen for messages
        socket.addEventListener('message', (event) => {
          try {
            const data = JSON.parse(event.data);
            console.log('Message from server:', data);
            
            // Update prices when we receive data
            dispatch(updateCryptoPrices());
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        });
        
        // Handle errors
        socket.addEventListener('error', (event) => {
          console.error('WebSocket error:', event);
          fallbackToInterval();
        });
        
        // Connection closed
        socket.addEventListener('close', (event) => {
          console.log('WebSocket connection closed:', event.code, event.reason);
          fallbackToInterval();
          
          // Try to reconnect after a delay
          setTimeout(() => {
            if (socketRef.current?.readyState === WebSocket.CLOSED) {
              connectWebSocket();
            }
          }, 5000);
        });
      } catch (error) {
        console.error('Failed to create WebSocket connection:', error);
        fallbackToInterval();
      }
    };
    
    // Fallback to interval-based updates if WebSocket fails
    const fallbackToInterval = () => {
      if (!intervalRef.current) {
        console.log('Falling back to interval-based updates');
        intervalRef.current = setInterval(() => {
          dispatch(updateCryptoPrices());
        }, fallbackInterval);
      }
    };
    
    // Start with WebSocket connection
    connectWebSocket();
    
    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [dispatch, fallbackInterval]);
}
