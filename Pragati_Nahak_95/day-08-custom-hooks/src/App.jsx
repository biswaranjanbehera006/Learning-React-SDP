import { useState } from "react"
import useFetch from "./hooks/useFetch"
import useAuth from "./hooks/useAuth"

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
  const { user, login, logout } = useAuth()
  const [name, setName] = useState("")

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Custom Hooks Demo 🚀</h1>

      {/* Auth Section */}
      <div className="bg-gray-800 p-6 rounded-xl mb-8">
        {!user ? (
          <>
            <input
              type="text"
              placeholder="Enter name"
              className="p-2 rounded text-black"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={() => login(name)}
              className="ml-3 px-4 py-2 bg-blue-600 rounded"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <p className="mb-3">Welcome, <b>{user.name}</b></p>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Fetch Section */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl mb-4">Users (useFetch Hook)</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="space-y-2">
          {data?.map(user => (
            <li key={user.id} className="bg-gray-700 p-2 rounded">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
