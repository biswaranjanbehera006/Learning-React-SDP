import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const login = (username, password) => {
    // MOCK LOGIN
    if (username && password) {
      const fakeToken = "mocked-jwt-token";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
