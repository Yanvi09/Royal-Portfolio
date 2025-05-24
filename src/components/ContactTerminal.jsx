import React, { useState, useEffect } from 'react';
import '../styles/ContactTerminal.css';

const ContactTerminal = () => {
  const [userQuery, setUserQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock responses for the AI
    const answers = [
      "Your request has been queued. Octavian will attend shortly.",
      "Allow me to fetch the necessary details.",
      "Summoning Octavian... Please hold."
    ];

    const selectedResponse = answers[Math.floor(Math.random() * answers.length)];

    // Simulate response delay for more realistic interaction
    setTimeout(() => {
      setResponse(selectedResponse);
      setIsLoading(false);
      setUserQuery('');
    }, 1500);

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
        "Greetings. I am Octavian, your AI concierge. How may I assist you today?",
        "UK English Male",
        { pitch: 0.95, rate: 0.9 }
      );
    }
  }, []);

  return (
    <section className="contact-terminal">
      <div className="terminal-header">
        <h2>✨ Contact Octavian ✨</h2>
        <p className="instruction-text">
          Have a query or request? Connect with me through any of the following channels:
        </p>
      </div>

      <div className="contact-options">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn 📇
            </a>
          </li>
          <li>
            <a href="mailto:your.email@example.com" className="contact-link">
              Email 📧
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub 💻
            </a>
          </li>
        
        </ul>
      </div>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your request here..."
            className="contact-input"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="contact-button"
            disabled={isLoading || !userQuery}
          >
            {isLoading ? 'Processing...' : 'Request an Audience'}
          </button>
        </form>

        {isLoading && (
          <div className="loading-indicator">
            <span>🔄 Processing your request...</span>
          </div>
        )}

        {response && !isLoading && (
          <div className="response-message">
            <p>{response}</p>
          </div>
        )}
      </div>

      <div className="terminal-footer">
        <p>Powered by Octavian AI - Your Personal Concierge</p>
      </div>
    </section>
  );
};

export default ContactTerminal;
