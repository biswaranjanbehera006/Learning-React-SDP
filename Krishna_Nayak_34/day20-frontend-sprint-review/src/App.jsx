import { useState } from "react";
import SprintBoard from "./components/SprintBoard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1>Frontend Sprint Review</h1>
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <SprintBoard />
    </div>
  );
}

export default App;
