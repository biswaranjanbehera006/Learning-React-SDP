import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";

function Users() {
  const users = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { user, login, logout } = useAuth();
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Users</h2>

      {/* Login Section */}
      {user ? (
        <>
          <p>Welcome, {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}

      <hr />

      {/* Users List */}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
