import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login successful! (static demo)");
  };

  return (
    <div className="login-container">
      <h3>Login / Signup</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
