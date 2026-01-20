import { NavLink } from "react-router-dom";

const AccessibleNav = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/demo">Demo</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccessibleNav;
