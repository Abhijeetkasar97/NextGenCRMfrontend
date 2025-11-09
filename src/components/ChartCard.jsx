import React from 'react';
import './chartCard.css';

const ChartCard = ({ title, chart }) => {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <div className="chart-container">{chart}</div>
    </div>
  );
};

export default ChartCard;
