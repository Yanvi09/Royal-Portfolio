import React, { useState } from 'react';
import '../styles/ContactTerminal.css';

const ContactTerminal = () => {
  const [userQuery, setUserQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = [
      "Good evening. Your request is now in the queue. Octavian will attend shortly.",
      "Ah, I see. Your question is quite intriguing. Allow me to look into that.",
      "Summoning Octavian... Please wait while I fetch the answers."
    ];
    setResponse(answers[Math.floor(Math.random() * answers.length)]);
    setUserQuery('');
  };

  return (
    <section className="contact-terminal">
      <div className="terminal-glass">
        <h2 className="terminal-title">✨ Request an Audience with Octavian ✨</h2>
        <p className="terminal-instruction">Speak your mind, and the butler shall respond with grace.</p>

        <form className="terminal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your royal command..."
            className="terminal-input"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <button type="submit" className="terminal-button">Summon Response</button>
        </form>

        {response && <div className="terminal-response">{response}</div>}
      </div>
    </section>
  );
};

export default ContactTerminal;
