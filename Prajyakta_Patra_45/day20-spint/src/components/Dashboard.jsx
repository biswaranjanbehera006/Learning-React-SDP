import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { title: "Users", value: 120 },
    { title: "Orders", value: 45 },
    { title: "Revenue", value: "$12,000" },
  ];

  return (
    <div className="dashboard-container">
      <h3>Dashboard Overview</h3>
      <div className="cards">
        {stats.map((stat, i) => (
          <div className="card" key={i}>
            {stat.title}: {stat.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
