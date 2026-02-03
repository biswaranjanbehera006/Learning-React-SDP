import { useState } from "react";

function Login() {
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setMessage("Login Successful");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        E2E Login Demo
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>

      {message && (
        <p className="mt-6 text-center text-green-600 font-semibold">
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;
