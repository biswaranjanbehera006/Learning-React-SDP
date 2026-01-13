import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { user, logout, toggleTheme } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <h1 className="text-xl font-bold">State Manager</h1>
      <div className="flex gap-4 items-center">
        <span>Hello, {user}</span>
        <button
          onClick={toggleTheme}
          className="bg-yellow-400 px-3 py-1 rounded text-black"
        >
          Toggle Theme
        </button>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
