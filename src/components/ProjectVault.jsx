//Tumhare portfolio ke projects vault jaisa dikhata hai.
// Ek-ek project ko secure aur stylish tarike se present karta hai.




import React from "react";
import { motion } from "framer-motion";
import "./ProjectVault.css"; // Import the styling

const ProjectVault = ({ title, description, tech, link }) => {
  return (
    <section id="vault-gallery">
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
    </section>
  );
};

export default ProjectVault;

