import React, { useState } from "react";
import "../styles/pages.css";

const LeadDetails = () => {
  const lead = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    company: "Acme Corp",
    status: "Contacted",
    assignedTo: "Jane Smith",
    dealValue: "$5,000",
    notes: [
      "Initial call completed",
      "Interested in product demo",
      "Follow-up scheduled next week"
    ],
    activities: [
      { action: "Sent Email", time: "2 hours ago" },
      { action: "Phone Call", time: "1 day ago" },
      { action: "Meeting Scheduled", time: "3 days ago" },
    ]
  };

  const [tab, setTab] = useState("details");

  return (
    <div className="lead-details page-container">
      <h2>{lead.name}</h2>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
      <p><strong>Company:</strong> {lead.company}</p>
      <p><strong>Status:</strong> {lead.status}</p>
      <p><strong>Assigned To:</strong> {lead.assignedTo}</p>
      <p><strong>Deal Value:</strong> {lead.dealValue}</p>

      <div className="tabs mt-2">
        <button className={tab === "details" ? "active-tab" : ""} onClick={() => setTab("details")}>Details</button>
        <button className={tab === "notes" ? "active-tab" : ""} onClick={() => setTab("notes")}>Notes</button>
        <button className={tab === "activities" ? "active-tab" : ""} onClick={() => setTab("activities")}>Activities</button>
      </div>

      {tab === "notes" && (
        <ul className="mt-2">
          {lead.notes.map((note, idx) => <li key={idx}>{note}</li>)}
        </ul>
      )}

      {tab === "activities" && (
        <ul className="activities-list mt-2">
          {lead.activities.map((act, idx) => (
            <li key={idx}>
              <strong>{act.action}</strong> <em>{act.time}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeadDetails;
