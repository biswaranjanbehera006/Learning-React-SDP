import { useState } from "react";
import SlowComponent from "../components/SlowComponent";
import MemoizedComponent from "../components/MemoizedComponent";
import OptimizedList from "../components/OptimizedList";
import VirtualizedList from "../components/VirtualizedList";

const OptimizationDemo = () => {
  const [count, setCount] = useState(0);

  const items = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2">
      
      {/* Performance Optimization */}
      <SlowComponent value={count} />

      {/* Memoization */}
      <MemoizedComponent value={count} />

      {/* Optimize List Rendering */}
      <OptimizedList items={items} />

      {/* Virtualization */}
      <VirtualizedList />

      {/* Performance Commit */}
      <div className="p-4 bg-yellow-100 rounded">
        <h3 className="font-semibold">Performance Commit</h3>
        <p>
          Used <code>React.memo</code>, <code>useMemo</code> and list slicing
          to reduce re-renders.
        </p>
      </div>

      {/* Optimization Demo */}
      <div className="p-4 bg-gray-200 rounded text-center">
        <h3 className="font-semibold mb-2">Optimization Demo</h3>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment ({count})
        </button>
      </div>
    </div>
  );
};

export default OptimizationDemo;
