import React from 'react';
import './notificationDemo.css';

const NotificationDemo = ({ message, type }) => {
  return (
    <div className={`notification ${type || 'info'}`}>
      {message}
    </div>
  );
};

export default NotificationDemo;
