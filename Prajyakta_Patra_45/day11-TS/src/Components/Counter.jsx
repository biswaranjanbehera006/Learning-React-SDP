import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <p className="text-3xl font-bold mb-4">{count}</p>

      <div className="flex justify-center gap-4">
        <Button label="Increment" onClick={() => setCount(count + 1)} />
        <Button label="Decrement" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
};

export default Counter;
