const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p className="text-gray-500">No users found</p>;
  }

  return (
    <ul className="list-disc ml-6">
      {users.map((user) => (
        <li key={user.id} className="font-medium">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
