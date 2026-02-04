import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const clearCache = async () => {
    const keys = await caches.keys();
    keys.forEach((key) => caches.delete(key));
    alert("Cache cleared!");
  };

  return (
    <div>
      <h1>📊 Dashboard</h1>

      <nav className="sub-nav">
        <NavLink to="users">Users</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <button onClick={clearCache}>🧹 Clear Cache</button>

      <Outlet />
    </div>
  );
}
