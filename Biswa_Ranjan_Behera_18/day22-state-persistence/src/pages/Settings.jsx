import { useEffect, useState } from "react";

export default function Settings() {
  const [lastVisit, setLastVisit] = useState(
    localStorage.getItem("lastVisit")
  );

  useEffect(() => {
    const now = new Date().toLocaleString();
    localStorage.setItem("lastVisit", now);
    setLastVisit(now);
  }, []);

  return (
    <div>
      <h2>⚙️ Settings</h2>
      <p>Last visit:</p>
      <strong>{lastVisit}</strong>
    </div>
  );
}
