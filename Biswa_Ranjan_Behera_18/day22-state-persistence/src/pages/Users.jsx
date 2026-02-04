import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h2>👥 Users</h2>
      <ul>
        {[1, 2, 3].map((id) => (
          <li key={id}>
            <Link to={`${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
