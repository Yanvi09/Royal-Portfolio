// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import VaultGallery from './components/VaultGallery';
import ResumeWing from './components/ResumeWing';
import CommandRoom from './components/CommandRoom';
import ContactTerminal from './components/ContactTerminal';
import Navbar from './components/Navbar';
import Butler from './components/Butler';

import useButlerVoice from './hooks/useButlerVoice';     // ✅ Butler voice greeting
import useVoiceCommands from './hooks/useVoiceCommands'; // ✅ Voice command listener

// Layout wraps each route with Navbar + Butler
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Butler />
    </>
  );
}

// Home page: speaks on load + listens for voice commands
function Home() {
  const speak = useButlerVoice();
  useVoiceCommands(); // ✅ Voice commands activated

  useEffect(() => {
    speak("Greetings, esteemed guest. Welcome to The Vault. I am Octavian, your AI Concierge.");
  }, [speak]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Vault</h1>
        <nav>
          <ul>
            <li><Link to="/">AI Butler</Link></li>
            <li><Link to="/vault">Vault Gallery</Link></li>
            <li><Link to="/command">Live Command Room</Link></li>
            <li><Link to="/resume">Formal Résumé</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Your Projects and Journey Await...</h2>
      </main>
    </div>
  );
}

// App component with all routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/vault" element={<Layout><VaultGallery /></Layout>} />
      <Route path="/command" element={<Layout><CommandRoom /></Layout>} />
      <Route path="/resume" element={<Layout><ResumeWing /></Layout>} />
      <Route path="/contact" element={<Layout><ContactTerminal /></Layout>} />
    </Routes>
  );
}

export default App;
