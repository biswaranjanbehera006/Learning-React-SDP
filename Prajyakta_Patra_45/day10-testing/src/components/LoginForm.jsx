import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        placeholder="Email"
        className="border px-2 py-1 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        className="border px-2 py-1 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="px-4 py-1 bg-purple-600 text-white rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
