import { useState } from "react";

function SprintColumn({ title, items }) {
  const [collapsed, setCollapsed] = useState(false);
  const [doneItems, setDoneItems] = useState([]);

  const toggleItem = (item) => {
    setDoneItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="column">
      <h3 onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer" }}>
        {title}
        <span style={{ fontSize: "12px", color: "#555" }}>
          {" "}
          ({doneItems.length}/{items.length})
        </span>
      </h3>

      {!collapsed && (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleItem(item)}
              style={{
                cursor: "pointer",
                textDecoration: doneItems.includes(item)
                  ? "line-through"
                  : "none",
                color: doneItems.includes(item) ? "green" : "black",
              }}
            >
              {doneItems.includes(item) ? "✔ " : "• "}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SprintColumn;
