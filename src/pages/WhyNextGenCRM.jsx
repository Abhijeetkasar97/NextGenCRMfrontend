import React from 'react';
import '../styles/pages.css';

const WhyNextGenCRM = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Why Next Gen CRM?</h1>
        <p>Streamline your sales process, improve team productivity, and close more deals.</p>
      </section>

      <section className="features-section">
        <div className="cards-container">
          <div className="card">
            <h3>Easy to Use</h3>
            <p>Intuitive design for sales teams to adopt quickly without training.</p>
          </div>
          <div className="card">
            <h3>Highly Customizable</h3>
            <p>Adapt workflows, dashboards, and automations to your business needs.</p>
          </div>
          <div className="card">
            <h3>Cloud-Based</h3>
            <p>Access your CRM securely from anywhere, anytime.</p>
          </div>
          <div className="card">
            <h3>Trusted by Thousands</h3>
            <p>Powering sales teams worldwide with reliable CRM solutions.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <button className="btn-primary">Get Started Now</button>
      </section>
    </div>
  );
};

export default WhyNextGenCRM;
