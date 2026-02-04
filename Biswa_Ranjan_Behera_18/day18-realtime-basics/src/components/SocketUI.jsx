import { useEffect } from "react";
import { send } from "../realtime";

export default function SocketUI() {
  useEffect(() => {
    const interval = setInterval(() => {
      send({
        type: "notify",
        message: "⚡ Auto realtime update",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h3>⚙️ Auto Events</h3>
      <p>Sending events every 5 seconds</p>
    </div>
  );
}
