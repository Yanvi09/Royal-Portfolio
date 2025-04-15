import React, { useState } from 'react';
import '../styles/ButlerOverlay.css';
import { FaRobot } from 'react-icons/fa';

const ButlerOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phrases = [
    "Greetings, I am Octavian. How may I assist your royal journey?",
    "Ah, you've summoned me. Excellent decision.",
    "The vault is secure. Shall I open a dossier?",
    "Allow me to fetch something marvelous from your portfolio.",
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessage(phrases[Math.floor(Math.random() * phrases.length)]);
    } else {
      setMessage('');
    }
  };

  return (
    <div className="butler-overlay">
      <button className="butler-button" onClick={toggleOpen}>
        <FaRobot className="butler-icon" />
      </button>

      {isOpen && (
        <div className="butler-dialogue">
          <p>{message}</p>
          <div className="butler-options">
            <button>🎓 Show Projects</button>
            <button>💬 Talk to Me</button>
            <button>🎩 Impress Me</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButlerOverlay;
