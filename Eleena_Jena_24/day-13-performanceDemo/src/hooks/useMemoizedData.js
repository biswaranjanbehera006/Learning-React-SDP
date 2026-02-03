import { useMemo } from "react";


export function useMemoizedData(count) {
const data = useMemo(() => {
console.log("Generating Large List...");


return Array.from({ length: count }, (_, i) => ({
id: i + 1,
name: `Item ${i + 1}`,
}));
}, [count]);


return data;
}