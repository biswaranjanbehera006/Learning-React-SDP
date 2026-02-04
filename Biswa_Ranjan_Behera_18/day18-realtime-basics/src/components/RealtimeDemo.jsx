import { useEffect, useState } from "react";
import { listen } from "../realtime";

export default function RealtimeDemo() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    listen((data) => {
      setLogs((prev) => [...prev, data]);
    });
  }, []);

  return (
    <div className="card">
      <h3>📡 Activity Logs</h3>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>
            [{l.time}] {l.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
