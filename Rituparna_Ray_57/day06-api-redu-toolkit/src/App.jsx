import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { dark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center
      ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <h1 className="text-3xl font-bold mb-4">
        Context API + Redux Toolkit
      </h1>

      <p className="text-4xl mb-6">{count}</p>

      <div className="space-x-4 mb-6">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          -
        </button>
      </div>

      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}
