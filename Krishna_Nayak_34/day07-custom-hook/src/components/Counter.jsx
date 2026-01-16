import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h2>Counter Value: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
