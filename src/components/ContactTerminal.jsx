import React, { useState } from 'react';
import '../styles/ContactTerminal.css';

const ContactTerminal = () => {
  const [userQuery, setUserQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate AI Response (Octavian speaking)
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
      <h2>✨ Summon Octavian ✨</h2>
      <p className="instruction-text">Have a question or request? Speak to Octavian, and he’ll guide you.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your request..."
          className="contact-input"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <button type="submit" className="contact-button">
          Request an Audience
        </button>
      </form>

      {response && <div className="response-message">{response}</div>}
    </section>
  );
};

export default ContactTerminal;
