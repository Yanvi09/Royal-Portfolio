import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIButler.css';

const AIButler = () => {
  const [message, setMessage] = useState("Good evening, my liege. Might I guide you through the finer corridors of your financial future?");
  const [butlerVisible, setButlerVisible] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const speakMessage = (msg) => {
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = 'en-US';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const speakAndNavigate = (msg, path) => {
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = 'en-US';
    utterance.onend = () => navigate(path);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const handleCommand = (command) => {
    if (command === 'project') {
      const msg = "Redirecting to the Vault Gallery. Prepare to be impressed.";
      setMessage(msg);
      speakAndNavigate(msg, '/vault');
    } else if (command === 'resume') {
      const msg = "Let me take you to the Formal Résumé Wing.";
      setMessage(msg);
      speakAndNavigate(msg, '/resume');
    }

    
    else if (command === 'royal') {
      const msg = "Let me Lead you to the Royal path .";
      setMessage(msg);
      speakAndNavigate(msg, '/chronicle');
    }
    

    else if (command === 'contact') {
      const msg = "Your attention please, we are going through the Contact terminal.";
      setMessage(msg);
      speakAndNavigate(msg, '/contact');
    }
    
    
    else if (command === 'retire') {
      const msg = "Goodbye, My Lord.";
      setMessage(msg);
      const utterance = new SpeechSynthesisUtterance(msg);
      utterance.lang = 'en-US';
      utterance.onend = () => {
        setIsActive(false);
        setButlerVisible(false);
      };
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    } else {
      const msg = "Sorry, I couldn't understand the command.";
      setMessage(msg);
      speakMessage(msg);
    }
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false; // listen for one sentence at a time
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log("🎧 Listening started");
        setIsListening(true);
      };

      recognition.onend = () => {
        console.log("🛑 Listening stopped");
        setIsListening(false);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join(' ')
          .toLowerCase()
          .trim();

        console.log("🎤 Heard:", transcript);

        if (!isActive && transcript.includes('october')) {
          setIsActive(true);
          setButlerVisible(true);
          const welcomeMsg = "October is at your service, My Lord.";
          setMessage(welcomeMsg);
          speakMessage(welcomeMsg);
          return;
        }

        if (isActive) {
          if (transcript.includes('project') || transcript.includes('vault')) {
            handleCommand('project');
          } else if (transcript.includes('resume') || transcript.includes('experience') || transcript.includes('résumé')) {
            handleCommand('resume');
          } else if (transcript.includes('retire') || transcript.includes('depart')) {
            handleCommand('retire');
          } else {
            handleCommand('unknown');
          }
        }
      };

      recognitionRef.current = recognition;
    }
  }, [isActive]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        if (error.name !== 'InvalidStateError') {
          console.error('Speech recognition error:', error);
        }
      }
    }
  };

  return (
    <div>
      <div className="clap-button-container">
        <button
          className={`clap-button ${isListening ? 'listening' : ''}`}
          onClick={startListening}
        >
          🎙️
        </button>
      </div>

      {butlerVisible && (
        <div className="butler-container">
          <div className="butler-avatar">
            <img src="/butler.gif" alt="AI Butler" className="butler-image" />
            <p className="butler-message">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIButler;
