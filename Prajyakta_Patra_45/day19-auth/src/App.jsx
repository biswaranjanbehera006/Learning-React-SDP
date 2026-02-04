import React, { useEffect, useState } from "react";

// ---------- Motion Card Wrapper ----------
function MotionCard({ children, initial, animate }) {
  const [style, setStyle] = useState({ transform: initial?.x || initial?.y || "0%", opacity: initial?.opacity || 0 });
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStyle({ transform: animate?.x || animate?.y || "0%", opacity: animate?.opacity || 1, transition: "all 0.6s ease" });
    }, 10);
    return () => clearTimeout(timeout);
  }, [animate]);

  return <div style={style}>{children}</div>;
}

// ---------- Login Component ----------
function Login({ onLogin, goToSignup, goToReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      if (email === "user@test.com" && password === "123456") {
        const userData = { email };
        if (remember) localStorage.setItem("authUser", JSON.stringify(userData));
        onLogin(userData);
      } else setError(true);
    }, 1000);
  };

  const socialLogin = (provider) => {
    const mockUser = { email: `${provider.toLowerCase()}@test.com` };
    localStorage.setItem("authUser", JSON.stringify(mockUser));
    onLogin(mockUser);
  };

  return (
    <MotionCard initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Login</h2>
        <form onSubmit={handleLogin}>
          <input style={inputStyle} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <label style={{ display: "block", marginBottom: "15px" }}>
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} style={{ marginRight: "6px" }} />
            Remember Me
          </label>
          <button style={{ ...primaryBtnStyle, ...(loading ? shimmerStyle : {}) }} type="submit">{loading ? "Logging in..." : "Login"}</button>
        </form>
        {error && <p style={errorMsgStyle}>Invalid email or password</p>}
        <p style={linkStyle} onClick={goToReset}>Forgot Password?</p>
        <p style={linkStyle} onClick={goToSignup}>Don't have an account? Sign Up</p>
        <p style={{ margin: "15px 0", color: "#666" }}>Or login with</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => socialLogin("Google")} style={socialBtnStyle("#db4437")}>G</button>
          <button onClick={() => socialLogin("GitHub")} style={socialBtnStyle("#333")}>GH</button>
        </div>
      </div>
    </MotionCard>
  );
}

// ---------- Dashboard Component ----------
function Dashboard({ user, onLogout }) {
  return (
    <MotionCard initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
      }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Welcome, {user.email}!</h1>
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>This is your dashboard.</p>
        <button
          onClick={onLogout}
          style={{
            ...primaryBtnStyle,
            background: "#ff6b6b",
            width: "150px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => e.target.style.background = "#ff4c4c"}
          onMouseOut={(e) => e.target.style.background = "#ff6b6b"}
        >
          Logout
        </button>
      </div>
    </MotionCard>
  );
}

// ---------- Signup Component ----------
function Signup({ onSignup, goToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      if (password !== confirm) setError(true);
      else {
        const userData = { email };
        localStorage.setItem("authUser", JSON.stringify(userData));
        onSignup(userData);
      }
    }, 1000);
  };

  return (
    <MotionCard initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input style={inputStyle} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <input style={inputStyle} type="password" placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
          <button style={{ ...primaryBtnStyle, ...(loading ? shimmerStyle : {}) }} type="submit">{loading ? "Signing up..." : "Sign Up"}</button>
        </form>
        {error && <p style={errorMsgStyle}>Passwords do not match</p>}
        <p style={linkStyle} onClick={goToLogin}>Already have an account? Login</p>
      </div>
    </MotionCard>
  );
}

// ---------- Reset Component ----------
function Reset({ goToLogin }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setTimeout(() => {
      setLoading(false);
      setMsg(`Password reset link sent to ${email} (mock)`);
    }, 1000);
  };

  return (
    <MotionCard initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Reset Password</h2>
        <form onSubmit={handleReset}>
          <input style={inputStyle} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <button style={{ ...primaryBtnStyle, ...(loading ? shimmerStyle : {}) }} type="submit">{loading ? "Sending..." : "Send Reset Link"}</button>
        </form>
        {msg && <p style={{ color: "green", marginTop: "10px" }}>{msg}</p>}
        <p style={linkStyle} onClick={goToLogin}>Back to Login</p>
      </div>
    </MotionCard>
  );
}

// ---------- App Component ----------
export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) { setUser(JSON.parse(storedUser)); setPage("dashboard"); }
  }, []);

  const navigate = (targetPage, data = null) => {
    setBgOffset(prev => prev + 100);
    if (targetPage === "dashboard") setUser(data);
    if (targetPage === "login" && data === null) localStorage.removeItem("authUser") || setUser(null);
    setPage(targetPage);
  };

  const backgroundStyle = {
    position: "fixed", width: "200%", height: "200%", top: "-50%", left: `${-50 + (bgOffset % 200)}%`,
    background: "linear-gradient(135deg, #667eea, #764ba2, #43e97b, #38f9d7, #ff7eb3, #ff758c, #fbd786, #f7797d)",
    backgroundSize: "400% 400%", transition: "left 0.8s ease", zIndex: -1,
  };

  switch (page) {
    case "login": return (<><div style={backgroundStyle}></div><Login onLogin={data => navigate("dashboard", data)} goToSignup={() => navigate("signup")} goToReset={() => navigate("reset")} /></>);
    case "signup": return (<><div style={backgroundStyle}></div><Signup onSignup={data => navigate("dashboard", data)} goToLogin={() => navigate("login")} /></>);
    case "reset": return (<><div style={backgroundStyle}></div><Reset goToLogin={() => navigate("login")} /></>);
    case "dashboard": return (<><div style={backgroundStyle}></div><Dashboard user={user} onLogout={() => navigate("login")} /></>);
    default: return null;
  }
}

// ---------- Styles ----------
const cardStyle = { background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", width: "350px", textAlign: "center", transition: "transform 0.3s ease", cursor: "default" };
const cardTitleStyle = { marginBottom: "20px", color: "#333" };
const inputStyle = { width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" };
const primaryBtnStyle = { width: "100%", padding: "12px", border: "none", borderRadius: "6px", background: "#667eea", color: "#fff", fontWeight: "bold", cursor: "pointer", marginBottom: "15px", transition: "all 0.3s ease" };
const shimmerStyle = { background: "linear-gradient(90deg, #667eea 0%, #8b90f0 50%, #667eea 100%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" };
const socialBtnStyle = (color) => ({ flex: 1, marginRight: "10px", padding: "10px", borderRadius: "6px", border: "none", background: color, color: "#fff", cursor: "pointer", fontWeight: "bold", transition: "transform 0.2s", fontSize: "16px" });
const linkStyle = { margin: "10px 0", cursor: "pointer", color: "#666" };
const errorMsgStyle = { color: "red", marginTop: "10px", animation: "bounce 0.5s" };

// ---------- Keyframes ----------
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes shimmer { 0%{background-position:-200%} 100%{background-position:200%} }`, styleSheet.cssRules.length);
styleSheet.insertRule(`@keyframes bounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)} }`, styleSheet.cssRules.length);
