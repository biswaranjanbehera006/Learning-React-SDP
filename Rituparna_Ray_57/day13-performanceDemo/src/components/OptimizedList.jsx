import { useState, useCallback } from "react";
import * as ReactWindow from "react-window";
import Item from "./Item";
import { useMemoizedData } from "../hooks/useMemoizedData";

const { FixedSizeList } = ReactWindow;

export default function OptimizedList() {
const [count, setCount] = useState(1000);


// Memoized large data
const items = useMemoizedData(count);


// Memoized handler
const increaseCount = useCallback(() => {
setCount((prev) => prev + 500);
}, []);


// Virtualized row renderer
const Row = ({ index, style }) => (
<div style={style}>
<Item item={items[index]} />
</div>
);


return (
<div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-5 shadow-lg">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold">Optimized List</h2>


<button
onClick={increaseCount}
className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
>
Load More
</button>
</div>


{/* Virtualized List */}
<FixedSizeList

height={400}
width="100%"
itemCount={items.length}
itemSize={45}
>
{Row}
</FixedSizeList>

</div>
);
}