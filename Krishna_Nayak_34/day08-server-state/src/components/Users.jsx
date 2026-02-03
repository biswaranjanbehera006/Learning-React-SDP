import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h3>Loading users...</h3>;
  if (error) return <h3>Error loading users</h3>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
