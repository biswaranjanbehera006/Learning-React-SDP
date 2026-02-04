import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


export default function MainLayout() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="nav">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>

        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </>
  );
}
