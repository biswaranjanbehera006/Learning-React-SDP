import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2> Hey This is 🏠 Home Page</h2>;
}

function About() {
  return <h2>Hey This is ℹ️ About Page</h2>;
}

function Contact() {
  return <h2>Hey This is📞 Contact Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px",justifyContent: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
