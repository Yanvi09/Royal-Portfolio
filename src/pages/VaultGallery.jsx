import React from "react";
import ProjectVault from "../components/ProjectVault";
import "./VaultGallery.css";

const VaultGallery = () => {
  return (
    <div className="vault-gallery">
      <h1 className="vault-title">🔐 Welcome to The Vault</h1>
      <p className="vault-subtitle">Where Your Finest Creations Rest Behind Digital Gold</p>

      <div className="vault-scroll-container">
        <ProjectVault
          title="MoneyMind"
          description="AI-powered investing planner & education platform."
          tech={["React", "Flask", "AI", "PostgreSQL"]}
          link="https://your-moneymind-link.com"
        />

        {/* Add more ProjectVault cards here as needed */}
      </div>
    </div>
  );
};

export default VaultGallery;
