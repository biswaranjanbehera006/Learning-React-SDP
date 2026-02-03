import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@test.com" && password === "123456") {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow w-80"
      data-testid="login-form"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      {error && (
        <p className="text-red-500 mb-2" data-testid="error-msg">
          {error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
        data-testid="email-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-3"
        data-testid="password-input"
      />

      <button
        className="bg-blue-500 text-white w-full py-2"
        data-testid="login-btn"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
