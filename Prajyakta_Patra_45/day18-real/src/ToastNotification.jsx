import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typeStyles = {
  info: { background: "#3498db", color: "#fff", icon: "ℹ️", sound: "https://www.myinstants.com/media/sounds/info.mp3" },
  success: { background: "#2ecc71", color: "#fff", icon: "✅", sound: "https://www.myinstants.com/media/sounds/success.mp3" },
  error: { background: "#e74c3c", color: "#fff", icon: "❌", sound: "https://www.myinstants.com/media/sounds/error.mp3" },
  warning: { background: "#f39c12", color: "#fff", icon: "⚠️", sound: "https://www.myinstants.com/media/sounds/warning.mp3" },
};

const ToastNotification = ({ message, type = "info", onClose }) => {
  const [remaining, setRemaining] = useState(4000);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  // Play sound on mount
  useEffect(() => {
    const audio = new Audio(typeStyles[type].sound);
    audio.play().catch((e) => console.log("Audio play prevented:", e));
  }, [type]);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const startTimer = () => {
    startRef.current = Date.now();
    timerRef.current = setTimeout(onClose, remaining);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
    const elapsed = Date.now() - startRef.current;
    setRemaining((prev) => prev - elapsed);
  };

  const handleMouseLeave = () => startTimer();

  return (
    <AnimatePresence>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          if (Math.abs(info.offset.x) > 100) onClose();
        }}
        style={{
          ...typeStyles[type],
          padding: "10px 20px 10px 40px",
          marginBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          minWidth: "250px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "grab",
          position: "relative",
        }}
      >
        <span>{typeStyles[type].icon}</span>
        <span style={{ flex: 1 }}>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToastNotification;
