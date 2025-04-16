import React, { useState, useEffect } from 'react';
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
    "Your digital empire awaits, milord. Command me."
  ];

  const speak = (text) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "UK English Male", {
        pitch: 0.7,
        rate: 0.9,
        volume: 1
      });
    }
  };

  const toggleOpen = () => {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    setIsOpen(!isOpen);
    setMessage(isOpen ? '' : phrase);
    if (!isOpen) speak(phrase);
  };

  useEffect(() => {
    // Greet once on first load like a proper butler
    speak("Welcome, sir. Octavian is at your service.");
  }, []);

  return (
    <div className="butler-overlay">
      <button className="butler-button" onClick={toggleOpen}>
        <FaRobot className="butler-icon" />
      </button>

      {isOpen && (
        <div className="butler-dialogue">
          <p>{message}</p>
          <div className="butler-options">
            <button onClick={() => speak("Presenting your finest projects, sir.")}>🎓 Show Projects</button>
            <button onClick={() => speak("Engaging conversation protocol.")}>💬 Talk to Me</button>
            <button onClick={() => speak("Ah, something to impress the council.")}>🎩 Impress Me</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButlerOverlay;
