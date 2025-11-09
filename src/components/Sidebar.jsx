import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/leads">Leads</NavLink>
        </li>
        <li>
          <NavLink to="/lead-details">Lead Details</NavLink>
        </li>
        <li>
          <NavLink to="/activities">Activities</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
