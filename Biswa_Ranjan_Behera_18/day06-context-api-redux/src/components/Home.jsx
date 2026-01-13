import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
import { increment } from "../redux/counterSlice";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#000000",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}
