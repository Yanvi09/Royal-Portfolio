import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Import pages from the pages folder
import VaultGallery from './pages/VaultGallery';
import CommandRoom from './pages/CommandRoom';

// Import components from the components folder
import ResumeWing from './components/ResumeWing'; // This file should import its css from ../styles/
import ContactTerminal from './components/ContactTerminal'; // Also imports its CSS from ../styles/
import Navbar from './components/Navbar'; // Will import its css from ../styles/
import AIButler from './components/AIButler'; // Your AI Butler component

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

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <AIButler /> {/* Using your AI Butler */}
    </>
  );
}

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
