import React from 'react';
import '../styles/pages.css';

const Resources = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Resources & Learning</h1>
        <p>Get the most out of your CRM with guides, webinars, and tutorials.</p>
      </section>

      <section className="resources-list">
        <ul>
          <li>CRM Getting Started Guide</li>
          <li>Sales Pipeline Best Practices</li>
          <li>Automations and Workflows Tutorial</li>
          <li>Advanced Reporting Tips</li>
          <li>Webinars and Video Tutorials</li>
        </ul>
      </section>

      <section className="cta-section">
        <button className="btn-primary">Explore All Resources</button>
      </section>
    </div>
  );
};

export default Resources;
