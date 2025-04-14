import React from 'react';
import './ResumeCard.css';

const ResumeCard = ({ title, company, duration, details }) => {
  return (
    <div className="resume-card">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default ResumeCard;
