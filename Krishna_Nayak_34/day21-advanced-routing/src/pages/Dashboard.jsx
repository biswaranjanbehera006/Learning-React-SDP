import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>

      <nav className="sub-nav">
        <NavLink to="users">Users</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
