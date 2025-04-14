import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import VaultGallery from './components/VaultGallery';
import ResumeWing from './components/ResumeWing';
import CommandRoom from './components/CommandRoom';
import ContactTerminal from './components/ContactTerminal'; // ✅ Importing it

function Home() {
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
            <li><Link to="/contact">Contact</Link></li> {/* ✅ Fixed Link */}
          </ul>
        </nav>
      </header>
      <main>
        <h2>Your Projects and Journey Await...</h2>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vault" element={<VaultGallery />} />
      <Route path="/command" element={<CommandRoom />} />
      <Route path="/resume" element={<ResumeWing />} />
      <Route path="/contact" element={<ContactTerminal />} /> {/* ✅ Route added */}
    </Routes>
  );
}

export default App;
