import React from 'react';
import '../styles/pages.css';

const ContactSales = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Contact Sales</h1>
        <p>Schedule a demo or get personalized advice from our sales team.</p>
      </section>

      <section className="contact-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactSales;
