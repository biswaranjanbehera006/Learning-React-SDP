import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <p className="mb-2 text-lg">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
