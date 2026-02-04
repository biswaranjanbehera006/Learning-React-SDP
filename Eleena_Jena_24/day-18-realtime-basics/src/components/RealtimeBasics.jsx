import { useEffect, useState } from "react";
import { send, listen } from "../realtime";

export default function RealtimeBasics() {
  const [users, setUsers] = useState(1);

  useEffect(() => {
    send({ type: "user-join" });

    listen((data) => {
      if (data.type === "user-join") {
        setUsers((u) => u + 1);
      }
    });
  }, []);

  return (
    <div className="card">
      <h3>👥 Live Users</h3>
      <p>{users} user(s) online</p>
    </div>
  );
}
