# Real-time Cryptocurrency Price Tracker

A responsive React and Redux Toolkit application that displays real-time cryptocurrency price updates using WebSocket connections.

## Features

- **Live Data Updates**: Prices update automatically through WebSocket connection
- **Fallback Mechanism**: Falls back to interval-based updates if WebSocket connection fails
- **Responsive Design**: Clean, minimalist interface focused on the data
- **Data Visualization**: Includes mini charts showing 7-day price trends
- **Real-time Indicators**: Color-coded price changes (green for positive, red for negative)

## Technology Stack

- **Frontend**: React, Redux Toolkit, TypeScript
- **UI Components**: Tailwind CSS with shadcn/ui
- **Real-time Communication**: WebSockets (via ws package)
- **Data Visualization**: Recharts for simple line charts
- **State Management**: Redux with Redux Toolkit

## Project Structure

- `client/`: Frontend React application
  - `src/components/`: UI components including the main CryptoTable
  - `src/store/`: Redux store and crypto slice for state management
  - `src/hooks/`: Custom hooks including useCryptoUpdates for WebSocket
  - `src/lib/`: Utility functions and formatters
- `server/`: Backend Express server
  - `routes.ts`: API routes and WebSocket server implementation
- `shared/`: Shared types and schemas

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to the local development URL

## How It Works

The application establishes a WebSocket connection to the server which broadcasts price updates every 2 seconds. Each update includes new prices, percentage changes, and volume data that's immediately reflected in the UI. If the WebSocket connection fails, the application falls back to interval-based polling.

## Screenshots

![Cryptocurrency Price Table](screenshot.png)