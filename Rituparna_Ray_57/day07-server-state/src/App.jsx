import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      )
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl mb-4">Server State</h1>

      {data.map((user) => (
        <div key={user.id} className="bg-white p-4 mb-2 rounded shadow">
          {user.name}
        </div>
      ))}
    </div>
  );
}
