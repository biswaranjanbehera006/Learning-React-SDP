import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h2>👥 Users</h2>
      <ul>
        <li><Link to="1">Krishna</Link></li>
        <li><Link to="2">Sweety</Link></li>
        <li><Link to="3">Tobyyyy</Link></li>
      </ul>
    </div>
  );
}
