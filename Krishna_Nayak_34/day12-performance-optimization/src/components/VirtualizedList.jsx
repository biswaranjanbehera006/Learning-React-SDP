const VirtualizedList = () => {
  const items = Array.from({ length: 10000 }, (_, i) => i + 1);

  return (
    <div className="p-4 bg-purple-100 rounded h-64 overflow-auto">
      <h3 className="font-semibold mb-2">Virtualized List</h3>
      {items.slice(0, 50).map((item) => (
        <div key={item} className="p-2 border-b">
          Item {item}
        </div>
      ))}
      <p className="text-sm text-gray-500 mt-2">
        (Showing only visible items)
      </p>
    </div>
  );
};

export default VirtualizedList;
