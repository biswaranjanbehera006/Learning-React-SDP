import React from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    "New user registered",
    "Order #123 completed",
    "Payment failed for user John",
  ];

  return (
    <div className="notifications-container">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
