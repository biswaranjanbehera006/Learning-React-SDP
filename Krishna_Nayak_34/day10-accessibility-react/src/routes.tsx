// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<Form />} />
      {/* Optional catch-all to avoid blank page on unmatched path */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
