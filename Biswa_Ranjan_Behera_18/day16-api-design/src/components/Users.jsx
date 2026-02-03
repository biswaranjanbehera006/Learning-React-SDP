import { useEffect, useState } from "react";
import { getUsers, createUser } from "../api/userApi";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleSubmit = async () => {
    const newUser = { name, email };
    await createUser(newUser);
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>User List</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Add User</button>

      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
