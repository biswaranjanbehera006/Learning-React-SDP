import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p data-testid="count-value">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
