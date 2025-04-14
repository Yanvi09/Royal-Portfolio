import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import VaultGallery from './components/VaultGallery'; // adjust path if needed

// Optional: Move homepage content to a separate Home component
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Vault</h1>
        <nav>
          <ul>
            <li><Link to="/">AI Butler</Link></li>
            <li><Link to="/vault">Vault Gallery</Link></li>
            <li>Live Command Room</li>
            <li>Formal Résumé</li>
            <li>Contact</li>
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

    </Routes>
  );
}

export default App;
