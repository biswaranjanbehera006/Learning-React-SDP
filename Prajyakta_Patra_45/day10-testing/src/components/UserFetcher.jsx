import { useEffect, useState } from "react";

const UserFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([{ id: 1, name: "John" }]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <p className="text-blue-600 font-semibold">Loading...</p>;
  }

  return <p className="font-bold">{users[0].name}</p>;
};

export default UserFetcher;
