// WebSocketComponent.js
import React, { useEffect } from "react";

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3002/ws");

    // Handle WebSocket events
    socket.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    socket.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      // Handle the received message as needed
    };

    socket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []); // The empty dependency array ensures this effect runs once on mount

  return <div>{/* Your component's content */}</div>;
};

export default WebSocketComponent;
