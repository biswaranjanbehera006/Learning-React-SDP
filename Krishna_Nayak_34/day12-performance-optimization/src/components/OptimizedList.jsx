import { useMemo } from "react";

const OptimizedList = ({ items }) => {
  const renderedList = useMemo(() => {
    console.log("List rendered");
    return items.map((item) => (
      <li key={item} className="border-b p-2">
        Item {item}
      </li>
    ));
  }, [items]);

  return (
    <div className="p-4 bg-blue-100 rounded">
      <h3 className="font-semibold mb-2">Optimized List</h3>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default OptimizedList;
