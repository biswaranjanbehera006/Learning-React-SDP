import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
