import SprintColumn from "./SprintColumn.jsx";
import sprintData from "../data/sprintData.js";

function SprintBoard() {
  return (
    <div className="board">
      {sprintData.map((col, index) => (
        <SprintColumn
          key={index}
          title={col.title}
          items={col.items}
        />
      ))}
    </div>
  );
}

export default SprintBoard;
