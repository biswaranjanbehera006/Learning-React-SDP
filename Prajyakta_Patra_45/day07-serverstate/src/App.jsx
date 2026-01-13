import { useQuery } from "@tanstack/react-query";
import "./App.css";

// API fetch function
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5000, // caching for 5 seconds
  });

  if (isLoading) return <h2>Loading users...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div className="container">
      <h1>React Query Server State Demo</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
