// src/hooks/useButlerVoice.js
import { useCallback } from 'react';

const useButlerVoice = () => {
  const speak = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis
      .getVoices()
      .find((voice) =>
        voice.name.includes('Daniel') || voice.name.includes('en-GB')
      ); // Choose a calm British voice
    utterance.pitch = 1;
    utterance.rate = 0.9;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }, []);

  return speak;
};

export default useButlerVoice;
