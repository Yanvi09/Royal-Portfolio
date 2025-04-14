import React from "react";
import "./ChartCard.css";

const ChartCard = ({ title, value, unit }) => {
  return (
    <div className="chart-card">
      <h2>{title}</h2>
      <p className="chart-value">
        {value} <span>{unit}</span>
      </p>
    </div>
  );
};

export default ChartCard;
