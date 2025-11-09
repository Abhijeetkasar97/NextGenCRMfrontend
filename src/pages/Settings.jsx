import React, { useState } from "react";
import "../styles/pages.css";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Jane Smith",
    email: "jane@example.com",
    password: "",
    phone: "+1 234 567 890",
    timezone: "GMT+5:30",
    notifications: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="page-container">
      <h1>Account Settings</h1>
      <p>Manage your profile and preferences</p>

      <div className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={profile.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Timezone</label>
          <select name="timezone" value={profile.timezone} onChange={handleChange}>
            <option value="GMT+5:30">GMT+5:30 (India)</option>
            <option value="GMT+0">GMT+0 (UTC)</option>
            <option value="GMT-5">GMT-5 (US Eastern)</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="notifications" checked={profile.notifications} onChange={handleChange} />
            Enable Email Notifications
          </label>
        </div>

        <button className="btn-primary" onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
