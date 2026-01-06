import { useState, useEffect } from "react";

function App() {
  // useState → to store data
  const [count, setCount] = useState(0);

  // useEffect → runs when count changes
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]); // runs only when count updates

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          React useState & useEffect
        </h1>

        <p className="text-lg mb-4">
          Count: <span className="font-semibold">{count}</span>
        </p>

        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
