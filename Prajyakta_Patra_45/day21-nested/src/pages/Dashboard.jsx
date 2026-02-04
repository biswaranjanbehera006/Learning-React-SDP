import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Nested lazy-loaded subpages
const DashboardHome = lazy(() => import("./DashboardHome"));
const DashboardSettings = lazy(() => import("./DashboardSettings"));

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="">Home</Link> | <Link to="settings">Settings</Link>
      </nav>

      <Suspense fallback={<div>Loading dashboard...</div>}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Routes>
      </Suspense>
    </div>
  );
}
