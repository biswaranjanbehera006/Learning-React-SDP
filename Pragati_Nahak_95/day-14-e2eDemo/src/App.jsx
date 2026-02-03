import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
