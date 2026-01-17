import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-2">
      <p data-testid="count" className="font-semibold">
        Count: {count}
      </p>
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
