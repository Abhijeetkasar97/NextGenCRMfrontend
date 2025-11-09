import React from 'react';
import '../styles/pages.css';

const Pricing = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose a plan that grows with your business. No hidden fees.</p>
      </section>

      <section className="pricing-cards">
        <div className="card">
          <h3>Starter</h3>
          <p className="price">$15 / user / month</p>
          <ul>
            <li>Basic CRM Features</li>
            <li>Email Integration</li>
            <li>Simple Reports</li>
          </ul>
          <button className="btn-primary">Select Plan</button>
        </div>
        <div className="card">
          <h3>Professional</h3>
          <p className="price">$35 / user / month</p>
          <ul>
            <li>Advanced CRM Features</li>
            <li>Automations & Workflows</li>
            <li>Custom Reports</li>
          </ul>
          <button className="btn-primary">Select Plan</button>
        </div>
        <div className="card">
          <h3>Enterprise</h3>
          <p className="price">$60 / user / month</p>
          <ul>
            <li>All Professional Features</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Integrations</li>
          </ul>
          <button className="btn-primary">Contact Sales</button>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Free Trial</h2>
        <p>Experience the power of Next Gen CRM risk-free for 14 days.</p>
        <button className="btn-primary">Try Free</button>
      </section>
    </div>
  );
};

export default Pricing;
