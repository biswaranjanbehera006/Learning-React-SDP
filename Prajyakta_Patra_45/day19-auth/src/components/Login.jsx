import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Mock authentication
    setTimeout(() => {
      setLoading(false);
      if (email === "user@test.com" && password === "123456") {
        const userData = { email };
        localStorage.setItem("authUser", JSON.stringify(userData));
        onLogin(userData);
      } else {
        setError("Invalid email or password");
      }
    }, 1000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px"
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              background: "#667eea",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s"
            }}
            onMouseOver={(e) => e.target.style.background = "#5a67d8"}
            onMouseOut={(e) => e.target.style.background = "#667eea"}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
      </div>
    </div>
  );
}
