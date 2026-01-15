import { useState } from "react";

function useAuth() {
  const [user, setUser] = useState("");

  const login = (name) => {
    setUser(name);
  };

  const logout = () => {
    setUser("");
  };

  return { user, login, logout };
}

export default useAuth;
