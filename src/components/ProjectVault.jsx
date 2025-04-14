import React, { useState } from "react";
import "./ProjectVault.css";

const ProjectVault = ({ title, description, tech }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`vault ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="vault-door">
        <span className="vault-door-label">{title}</span>
      </div>
      {isOpen && (
        <div className="vault-content">
          <p>{description}</p>
          <ul>
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectVault;
