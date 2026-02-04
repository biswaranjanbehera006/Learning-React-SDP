import { useEffect, useState } from "react";
import { listen } from "../realtime";

export default function NotificationUI() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listen((data) => {
      if (data.type === "chat") {
        setMessages((prev) => [...prev, data]);
      }
    });
  }, []);

  return (
    <div className="card">
      <h3>🔔 Live Messages</h3>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>
            [{m.time}] {m.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
