import React from "react";
import "./SprintDemo.css";

const sprintDeliverables = [
  { feature: "Login/Signup Forms", status: "✅ Completed" },
  { feature: "Dashboard UI", status: "✅ Completed" },
  { feature: "Notifications Panel", status: "✅ Completed" },
  { feature: "Search & Filters", status: "✅ Completed" },
  { feature: "Mobile UI Glitches Fix", status: "✅ Completed" },
  { feature: "API Loading States", status: "✅ Completed" },
];

const SprintDemo = () => (
  <div className="sprint-demo-container">
    <h3>Frontend Sprint Deliverables</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sprintDeliverables.map((item, index) => (
          <tr key={index}>
            <td>{item.feature}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SprintDemo;
