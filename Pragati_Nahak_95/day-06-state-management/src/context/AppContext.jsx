import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");
  const [theme, setTheme] = useState("light");

  const login = (name) => setUser(name);
  const logout = () => setUser("Guest");
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <AppContext.Provider
      value={{ user, theme, login, logout, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
