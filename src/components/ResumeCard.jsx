import React from "react";
import "../styles/ResumeCard.css";

const ResumeCard = ({ title, company, duration, description }) => {
  return (
    <div className="resume-card">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <span className="duration">{duration}</span>
      <p>{description}</p>
    </div>
  );
};

export default ResumeCard;
