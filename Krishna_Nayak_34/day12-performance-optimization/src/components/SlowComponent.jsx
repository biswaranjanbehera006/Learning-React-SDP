const SlowComponent = ({ value }) => {
  console.log("Slow component rendered");

  // Heavy calculation
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div className="p-4 bg-red-100 rounded">
      <h3 className="font-semibold">Slow Component</h3>
      <p>Value: {value}</p>
    </div>
  );
};

export default SlowComponent;
