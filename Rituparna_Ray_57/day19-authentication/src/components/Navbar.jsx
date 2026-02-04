import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { token } = useAuth();

  return (
    <nav className="nav">
      <h3>Auth UI Demo</h3>
      {token ? (
        <Link to="/dashboard">Dashboard</Link>
      ) : (
        <Link to="/">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
