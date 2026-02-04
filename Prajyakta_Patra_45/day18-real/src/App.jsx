import React from "react";
import { SocketProvider } from "./SocketContext";
import NotificationUI from "./NotificationUI";

function App() {
  return (
    <SocketProvider>
      <NotificationUI />
    </SocketProvider>
  );
}

export default App;
