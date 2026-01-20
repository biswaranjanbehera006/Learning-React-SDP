import { useState } from "react";

const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
};

export default Counter;
