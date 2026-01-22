import { memo } from "react";

const MemoizedComponent = ({ value }) => {
  console.log("Memoized component rendered");

  return (
    <div className="p-4 bg-green-100 rounded">
      <h3 className="font-semibold">Memoized Component</h3>
      <p>Value: {value}</p>
    </div>
  );
};

export default memo(MemoizedComponent);
