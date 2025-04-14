import React from "react";
import ProjectVault from "../components/ProjectVault";
import "./VaultGallery.css";

const VaultGallery = () => {
  return (
    <div className="vault-gallery">
      <h1 className="vault-title">Welcome to The Vault</h1>
      <div className="vault-scroll-container">
        <ProjectVault
          title="MoneyMind"
          description="AI-powered investing planner & education platform."
          tech={["React", "Flask", "AI", "PostgreSQL"]}
        />
        {/* Add more ProjectVaults below */}
      </div>
    </div>
  );
};

export default VaultGallery;
