import React, { useState, useEffect } from 'react';
import './AIButler.css';

const AIButler = () => {
  const [message, setMessage] = useState("Good evening, shall we explore your financial future today?");
  
  useEffect(() => {
    const speakMessage = () => {
      const utterance = new SpeechSynthesisUtterance(message);
      speechSynthesis.speak(utterance);
    };
    speakMessage();
  }, [message]);

  const handleClick = (response) => {
    if (response === 'projects') {
      setMessage("Let's look at your projects, shall we?");
    } else if (response === 'experience') {
      setMessage("Here’s your experience, enjoy the tour!");
    }
  };

  return (
    <div className="butler-container">
      <div className="butler-avatar">
        <p>{message}</p>
        <button onClick={() => handleClick('projects')}>Show Projects</button>
        <button onClick={() => handleClick('experience')}>View Experience</button>
      </div>
    </div>
  );
};

export default AIButler;
