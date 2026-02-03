import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const { user, login, theme } = useContext(AppContext);
  const [name, setName] = useState("");

  return (
    <div
      className={`p-10 ${
        theme === "light" ? "bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-2xl mb-4">Dashboard</h2>

      {user === "Guest" ? (
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter name"
            className="border px-3 py-2 text-black"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={() => login(name)}
            className="bg-green-500 px-4 py-2 text-white rounded"
          >
            Login
          </button>
        </div>
      ) : (
        <p className="text-lg">Welcome back, {user} 🎉</p>
      )}
    </div>
  );
}
