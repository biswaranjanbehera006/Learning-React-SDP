import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading users...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>
      <div className="bg-white shadow rounded-lg p-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center p-4 mb-3 border rounded hover:bg-yellow-50 transition"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
           <button
  onClick={() => alert(`Name: ${user.name}\nEmail: ${user.email}`)}
  className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition"
>
  View
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
