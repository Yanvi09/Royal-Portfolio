// src/hooks/useVoiceCommands.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useVoiceCommands = () => {
 const navigate = useNavigate();

 useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
     if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log('User said:', transcript);

      // Speak back response
      const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynthesis
          .getVoices()
          .find((voice) => voice.name.includes('Daniel') || voice.name.includes('en-GB'));
        speechSynthesis.speak(utterance);
      };

      // Match commands
      if (transcript.includes('resume')) {
        speak('Navigating to your résumé wing.');
        navigate('/resume');
      } else if (transcript.includes('vault')) {
        speak('Opening the vault gallery.');
        navigate('/vault');
      } else if (transcript.includes('command') || transcript.includes('dashboard')) {
        speak('Taking you to the command room.');
        navigate('/command');
      } else if (transcript.includes('contact')) {
        speak('Redirecting to the contact terminal.');
        navigate('/contact');
      } else if (transcript.includes('home') || transcript.includes('butler')) {
        speak('Back to the butler’s chamber.');
        navigate('/');
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, []);
};

export default useVoiceCommands;
