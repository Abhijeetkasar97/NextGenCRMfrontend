import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">NextGen CRM</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/why-nextgen-crm">Why Next Gen CRM</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
        <li><NavLink to="/contact-sales">Contact Sales</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
