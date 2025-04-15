import React, { useState, useEffect } from 'react';
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
    const selectedResponse = answers[Math.floor(Math.random() * answers.length)];
    setResponse(selectedResponse);
    setUserQuery('');

    // Voice response (UK English Male for old money butler tone)
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(
        selectedResponse,
        "UK English Male",
        { pitch: 0.9, rate: 0.85, volume: 1 }
      );
    }
  };

  useEffect(() => {
    // Speak intro message when component loads
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(
        "Greetings. I am Octavian, your AI concierge. How may I be of assistance today?",
        "UK English Male",
        { pitch: 0.95, rate: 0.9 }
      );
    }
  }, []);

  return (
    <section className="contact-terminal">
      <h2>✨ Summon Octavian ✨</h2>
      <p className="instruction-text">
        Have a question or request? Speak to Octavian, and he’ll guide you.
      </p>

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
