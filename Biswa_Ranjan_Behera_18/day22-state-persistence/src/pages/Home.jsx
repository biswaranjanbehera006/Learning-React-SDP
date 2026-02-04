import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>🏠 Home</h1>

      <h3>🔢 Persisted Counter</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <p>Count: <strong>{count}</strong></p>
      <p>Works even offline & after refresh</p>
    </div>
  );
}
