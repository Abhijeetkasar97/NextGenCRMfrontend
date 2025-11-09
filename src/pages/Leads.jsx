import React from "react";
import "../styles/pages.css";

const Leads = () => {
  const leads = [
    { name: "John Doe", email: "john@example.com", status: "New", assigned: "Jane", created: "2025-11-09", source: "Website", dealValue: "$5,000" },
    { name: "Mary Johnson", email: "mary@example.com", status: "Contacted", assigned: "John", created: "2025-11-08", source: "Referral", dealValue: "$8,200" },
    { name: "Peter Parker", email: "peter@example.com", status: "Qualified", assigned: "Emily", created: "2025-11-07", source: "Email Campaign", dealValue: "$12,000" },
  ];

  return (
    <div className="page-container">
      <h1>Leads</h1>
      <p>Manage all your leads and track their progress efficiently.</p>

      <div className="cards-container">
        <div className="card">
          <h3>Total Leads</h3>
          <p>{leads.length}</p>
        </div>
        <div className="card">
          <h3>New Leads</h3>
          <p>{leads.filter(l => l.status === "New").length}</p>
        </div>
        <div className="card">
          <h3>Qualified Leads</h3>
          <p>{leads.filter(l => l.status === "Qualified").length}</p>
        </div>
      </div>

      <table className="leads-table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Created At</th>
            <th>Source</th>
            <th>Deal Value</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, idx) => (
            <tr key={idx}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>{lead.assigned}</td>
              <td>{lead.created}</td>
              <td>{lead.source}</td>
              <td>{lead.dealValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
