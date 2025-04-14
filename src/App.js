// App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import VaultGallery from './components/VaultGallery';
import ResumeWing from './components/ResumeWing';
import CommandRoom from './components/CommandRoom';
import ContactTerminal from './components/ContactTerminal';
import Navbar from './components/Navbar';
import Butler from './components/Butler'; // ⬅️ Add this

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Butler />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><div className="App"><h1>Welcome to The Vault</h1><h2>Your Projects and Journey Await...</h2></div></Layout>} />
      <Route path="/vault" element={<Layout><VaultGallery /></Layout>} />
      <Route path="/command" element={<Layout><CommandRoom /></Layout>} />
      <Route path="/resume" element={<Layout><ResumeWing /></Layout>} />
      <Route path="/contact" element={<Layout><ContactTerminal /></Layout>} />
    </Routes>
  );
}

export default App;
