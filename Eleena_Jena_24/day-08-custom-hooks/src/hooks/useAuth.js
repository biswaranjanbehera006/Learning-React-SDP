import { useState } from "react"

const useAuth = () => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null
  })

  const login = (username) => {
    const userData = { name: username }
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return { user, login, logout }
}

export default useAuth
