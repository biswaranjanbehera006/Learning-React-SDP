import React from "react";

export default function Dashboard({ user, onLogout }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #43e97b, #38f9d7)",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h1>Welcome, {user.email}!</h1>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>This is your dashboard.</p>
      <button
        onClick={onLogout}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          borderRadius: "6px",
          border: "none",
          background: "#ff6b6b",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => e.target.style.background = "#ff4c4c"}
        onMouseOut={(e) => e.target.style.background = "#ff6b6b"}
      >
        Logout
      </button>
    </div>
  );
}
