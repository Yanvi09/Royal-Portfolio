import React from "react";
import ProjectVault from "../components/ProjectVault";
import "./VaultGallery.css";

const VaultGallery = () => {
  return (
    <div className="vault-gallery">
      <h1 className="vault-title">🔐 Welcome to The Vault</h1>
      <p className="vault-subtitle">
        Where Your Finest Creations Rest Behind Digital Gold
      </p>

      {/* Scroll container holding all the projects */}
      <div className="vault-scroll-container">
        {/* Project 1: Azeroth Chain Explorer */}
        <ProjectVault
          title="Azeroth Chain Explorer"
          description="WoW-themed blockchain explorer with wallet generation and mining features."
          tech={["Python", "Flask", "Socket.IO", "ECDSA"]}
          link="https://azeroth-chain-explorer.onrender.com"
        />

        {/* Project 2: Automatify */}
        <ProjectVault
          title="Automatify"
          description="AI Automation Platform with TTS, Image, and Chatbot functionalities."
          tech={["JavaScript", "HTML", "REST API"]}
          link="https://lnkd.in/gJngStUK"
        />

        {/* Project 3: Spider */}
        <ProjectVault
          title="Spider"
          description="Crypto Blogging Platform with Node.js & MongoDB."
          tech={["Node.js", "Express", "MongoDB"]}
          link="https://github.com/Yanvi09/cryptoblog"
        />

        {/* Project 4: AI dashboard */}
        <ProjectVault
          title="AI-Saftey Dashboard"
          description="Real-world problem based using ReactJS & web technologies!."
          tech={["React", "AI", "UI/UX"]}
          link="https://frolicking-starburst-522afd.netlify.app"
        />

         <ProjectVault
          title="Revive - A Hospital System"
          description="AI-powered, full-stack hospital management solution."
          tech={["Laravel", "Flutter", "FastAPI", "WebSockets"]}
          link="https://github.com/Yanvi09/Revive"
        />
      </div>
    </div>
  );
};

export default VaultGallery;
