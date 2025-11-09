import React from 'react';
import '../styles/pages.css';

const Products = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>All-in-One CRM Platform</h1>
        <p>Manage sales, contacts, pipelines, and automation seamlessly in one place.</p>
        <button className="btn-primary">Start Free Trial</button>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Pipeline Management</h3>
            <p>Visualize your sales pipelines and track every deal stage efficiently.</p>
          </div>
          <div className="card">
            <h3>Contact Management</h3>
            <p>Keep all your customer and lead information organized in one place.</p>
          </div>
          <div className="card">
            <h3>Email Integration</h3>
            <p>Send emails directly from the CRM and track interactions automatically.</p>
          </div>
          <div className="card">
            <h3>Sales Automation</h3>
            <p>Automate repetitive tasks like follow-ups, reminders, and updates.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Boost Your Sales Today</h2>
        <p>Start managing your deals with efficiency and confidence.</p>
        <button className="btn-primary">Get Started</button>
      </section>
    </div>
  );
};

export default Products;
