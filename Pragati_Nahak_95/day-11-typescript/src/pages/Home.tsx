import Counter from "../components/Counter"
import UserCard from "../components/UserCard"

const Home = () => {
  const user = {
    id: 1,
    name: "Eleena Jena",
    email: "eleena@example.com",
  }

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 bg-gray-50 p-10">
      <h1 className="text-3xl font-bold">TypeScript + React Demo</h1>

      <UserCard user={user} />
      <Counter />
    </div>
  )
}

export default Home
