import React from 'react';
import '../styles/pages.css';

const Help = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Help Center</h1>
        <p>Find answers to common questions or reach out to our support team.</p>
      </section>

      <section className="help-topics">
        <div className="cards-container">
          <div className="card">
            <h3>Account Setup</h3>
            <p>Step-by-step instructions to get started with Next Gen CRM.</p>
          </div>
          <div className="card">
            <h3>Managing Leads</h3>
            <p>Learn how to add, edit, and track leads in your CRM.</p>
          </div>
          <div className="card">
            <h3>Automations</h3>
            <p>Create automated workflows for follow-ups and notifications.</p>
          </div>
          <div className="card">
            <h3>Reports & Analytics</h3>
            <p>Generate insights about your sales team and pipeline performance.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <button className="btn-primary">Contact Support</button>
      </section>
    </div>
  );
};

export default Help;
