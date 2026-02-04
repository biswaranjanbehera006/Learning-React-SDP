import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Login = ({ darkMode }) => (
  <div className={`login-container ${darkMode ? "dark" : ""}`}>
    <h3>Login / Signup</h3>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Submit</button>
    </form>
  </div>
);

const Dashboard = ({ darkMode }) => (
  <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
    <h3>Dashboard Overview</h3>
    <div className="cards">
      <div className="card">Users: 120</div>
      <div className="card">Orders: 45</div>
      <div className="card">Revenue: $12,000</div>
    </div>
  </div>
);

const Notifications = ({ darkMode }) => (
  <div className={`notifications-container ${darkMode ? "dark" : ""}`}>
    <h3>Notifications</h3>
    <ul>
      <li>New user registered</li>
      <li>Order #123 completed</li>
      <li>Payment failed for user John</li>
    </ul>
  </div>
);

const SprintDemo = ({ darkMode }) => (
  <div className={`sprint-demo-container ${darkMode ? "dark" : ""}`}>
    <h3>Frontend Sprint Deliverables</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Login/Signup Forms</td><td>✅ Completed</td></tr>
        <tr><td>Dashboard UI</td><td>✅ Completed</td></tr>
        <tr><td>Notifications Panel</td><td>✅ Completed</td></tr>
        <tr><td>Search & Filters</td><td>✅ Completed</td></tr>
        <tr><td>Mobile UI Glitches Fix</td><td>✅ Completed</td></tr>
      </tbody>
    </table>
  </div>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : ""}`}>
      <h1>Frontend Sprint Demo</h1>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <Login darkMode={darkMode} />
      <Dashboard darkMode={darkMode} />
      <Notifications darkMode={darkMode} />
      <SprintDemo darkMode={darkMode} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
