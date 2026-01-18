// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
      {" | "}
      <NavLink to="/form">Form</NavLink>
    </nav>
  );
}
