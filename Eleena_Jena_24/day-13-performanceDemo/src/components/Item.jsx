import React from "react";


const Item = React.memo(({ item }) => {
console.log("Rendering:", item.name);


return (
<div className="p-3 border-b border-gray-700 hover:bg-gray-800 transition">
{item.name}
</div>
);
});


export default Item;