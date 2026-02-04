import React, { useEffect, useState } from "react";
import { useSocket } from "./SocketContext";
import ToastNotification from "./ToastNotification";
import { AnimatePresence, motion } from "framer-motion";

const MAX_VISIBLE = 4;

// Different messages per type
const MESSAGES = {
  info: [
    "New info available",
    "Did you know?",
    "Heads up: Info notification",
  ],
  success: [
    "Action completed successfully!",
    "Task finished ✅",
    "Great job!",
  ],
  error: [
    "Something went wrong ❌",
    "Failed to save changes",
    "Error occurred!",
  ],
  warning: [
    "Warning: Check your input ⚠️",
    "Be careful!",
    "Attention needed!",
  ],
};

const TYPES = Object.keys(MESSAGES);

const NotificationUI = () => {
  const socket = useSocket();
  const [notifications, setNotifications] = useState([]);

  // Listen to socket events
  useEffect(() => {
    socket.on("notification", (note) => {
      setNotifications((prev) => {
        const updated = [...prev, note];
        if (updated.length > MAX_VISIBLE) updated.shift(); // maintain max
        return updated;
      });
    });
    return () => socket.off("notification");
  }, [socket]);

  // Manual trigger
  const triggerNotification = (type) => {
    const msgs = MESSAGES[type];
    const message = msgs[Math.floor(Math.random() * msgs.length)];
    socket.emit("notification", { message, type });
  };

  // Fully random generator
  useEffect(() => {
    const generateRandomNotification = () => {
      const type = TYPES[Math.floor(Math.random() * TYPES.length)];
      const msgs = MESSAGES[type];
      const message = msgs[Math.floor(Math.random() * msgs.length)];
      socket.emit("notification", { message, type });

      // Next random interval between 3-8 seconds
      const interval = Math.random() * 5000 + 3000;
      setTimeout(generateRandomNotification, interval);
    };

    const initialTimeout = Math.random() * 5000 + 2000; // start after 2-7 sec
    const timeoutId = setTimeout(generateRandomNotification, initialTimeout);

    return () => clearTimeout(timeoutId);
  }, [socket]);

  const removeNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Frontend Real-time Notifications (Random Live)</h2>

      <div style={{ marginBottom: "10px" }}>
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => triggerNotification(type)}
            style={{ marginRight: "10px", padding: "8px 15px", cursor: "pointer" }}
          >
            {type} Notification
          </button>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <AnimatePresence initial={false}>
          {notifications.map((note, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ToastNotification
                message={note.message}
                type={note.type}
                onClose={() => removeNotification(idx)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationUI;
