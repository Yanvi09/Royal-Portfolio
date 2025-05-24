//Ye ek chart ya graph dikhata hai – jaise metrics ke liye.
// Dashboard mein live data ya stats yahi dikhata hai.



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
