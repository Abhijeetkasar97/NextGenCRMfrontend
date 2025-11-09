import React from "react";
import "../styles/pages.css";

const Activities = () => {
  const activities = [
    { user: "Jane Smith", action: "Updated lead status", lead: "John Doe", time: "2h ago" },
    { user: "John Doe", action: "Added new lead", lead: "Mary Johnson", time: "5h ago" },
    { user: "Emily Clark", action: "Sent email", lead: "Peter Parker", time: "1d ago" },
    { user: "Jane Smith", action: "Scheduled demo", lead: "John Doe", time: "2d ago" },
  ];

  return (
    <div className="page-container">
      <h1>Recent Activities</h1>
      <p>Track all your team’s sales and CRM activities.</p>

      <ul className="activities-list">
        {activities.map((act, idx) => (
          <li key={idx}>
            <strong>{act.user}</strong> {act.action} for <em>{act.lead}</em> - <span>{act.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
