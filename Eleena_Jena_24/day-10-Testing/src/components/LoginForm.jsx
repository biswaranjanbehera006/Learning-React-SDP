import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "123456") {
      setMsg("Login Successful");
    } else {
      setMsg("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-80">
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button className="bg-green-600 text-white w-full py-2 rounded">
        Login
      </button>

      {msg && <p className="mt-3 text-center">{msg}</p>}
    </form>
  );
}
