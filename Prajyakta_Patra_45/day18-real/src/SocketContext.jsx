import React, { createContext, useContext } from "react";

const SocketContext = createContext();
export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  // Frontend-only simulated socket
  const socket = {
    listeners: {},
    on(event, callback) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(callback);
    },
    off(event) {
      if (this.listeners[event]) this.listeners[event] = [];
    },
    emit(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach((cb) => cb(data));
      }
    },
  };

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
