// src/components/VaultGallery/ProjectVault.jsx
import React from "react";
import { motion } from "framer-motion";
import "./ProjectVault.css"; // Import the styling

const ProjectVault = ({ title, description, tech, link }) => {
  return (
    <motion.div
      className="vault-card"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px gold" }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="vault-tech">
        {tech.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </motion.div>
  );
};

export default ProjectVault;
