import React from 'react';
import '../styles/pages.css';

const About = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>About Next Gen CRM</h1>
        <p>Our mission is to empower sales teams to close more deals with less effort.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Jane Smith</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="card">
            <h3>John Doe</h3>
            <p>Head of Product</p>
          </div>
          <div className="card">
            <h3>Emily Clark</h3>
            <p>Customer Success Lead</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <button className="btn-primary">Join Our Team</button>
      </section>
    </div>
  );
};

export default About;
