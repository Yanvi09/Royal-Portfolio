import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import ButlerOverlay from './components/ButlerOverlay'

// Import pages from the pages folder
import VaultGallery from './pages/VaultGallery';

import RoyalChronicle from './components/RoyalChronicle';


// Import components from the components folder
import ResumeWing from './components/ResumeWing'; // This file should import its css from ../styles/
import ContactTerminal from './components/ContactTerminal'; // Also imports its CSS from ../styles/
import Navbar from './components/Navbar'; // Will import its css from ../styles/
import AIButler from './components/AIButler'; // Your AI Butler component

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="royal-title">Mistress of the Vault</h1>
        
        <p className="royal-introduction">
  With the utmost reverence and pride, I present to you our Mistress — Her Excellency, Lady Anvi Yadav.  
  A prodigy of the modern age, she hails from the esteemed halls of Lovely Professional University, where she currently pursues her noble studies as a third-year scholar of Computer Science.  
  Her Grace is a virtuoso in the realm of full-stack development, seamlessly weaving the front-end and back-end arts with elegance and technical mastery.  
  Possessed of both vision and valour, she commands languages and frameworks with the poise of a seasoned architect and the spirit of a pioneer.  
  Beyond her academic station, the Lady Anvi has cultivated a formidable foundation in technologies such as Python, React, Node.js, Flask, and beyond.  
  Each of her creations is not merely a construct, but a legacy — coded with clarity, adorned with logic, and guided by an unrelenting pursuit of excellence.  
  She walks the fine line between art and algorithm, ever graceful, ever exacting, and always ahead of her time.  
  Her works, housed within this Vault, stand as royal manuscripts of innovation, authored by none other than our visionary mistress.  
  In her presence, one does not merely observe — one beholds.  
  Welcome, noble guest, to the dominion of Lady Anvi Yadav — where intellect is legacy, and code is crowned.
</p>

      </header>

      <main>
        <h2 className="intro-text">Step Into Our Realm of Innovation and Exploration....</h2>
        
       
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
  <Route path="/chronicle" element={<Layout><RoyalChronicle /></Layout>} />
  <Route path="/resume" element={<Layout><ResumeWing /></Layout>} />
  <Route path="/contact" element={<Layout><ContactTerminal /></Layout>} />
  <Route path="/butler" element={<Layout><ButlerOverlay /></Layout>} />
</Routes>

  );
}

export default App;
