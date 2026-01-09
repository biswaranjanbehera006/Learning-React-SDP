import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      {/* Main Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        Welcome to My React Router Page
      </h1>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ textDecoration: "none" }} to="/about">About</Link>
        <Link style={{ textDecoration: "none" }} to="/contact">Contact</Link>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
