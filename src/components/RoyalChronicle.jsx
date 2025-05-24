import React, { useState, useEffect } from 'react';
import './RoyalChronicle.css';

const RoyalChronicle = () => {
  const [quote, setQuote] = useState('');
  const [idea, setIdea] = useState('');
  const [video, setVideo] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('golden-entries');
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handlePost = () => {
    if (!quote && !idea) return;

    const newEntry = {
      quote,
      idea,
      video,
      time: new Date().toLocaleString(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('golden-entries', JSON.stringify(updatedEntries));

    setQuote('');
    setIdea('');
    setVideo(null);
  };

  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter((_, idx) => idx !== indexToDelete);
    setEntries(updatedEntries);
    localStorage.setItem('golden-entries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="royal-chronicle fade-in">
      <h1 className="royal-title">👑 Mistress’s Golden Chronicle</h1>
      <p className="royal-sub">A Daily Palace of Thoughts, Dreams & Disruptions</p>

      <textarea
        className="royal-input"
        rows="2"
        placeholder="✨ Today's golden quote or reflection..."
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      ></textarea>

      <textarea
        className="royal-input"
        rows="4"
        placeholder="📜 Share your project idea, goal, or challenge for today..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      ></textarea>

      <div className="royal-controls">
        <input type="file" className="royal-upload" onChange={handleUpload} accept="video/*" />
        <button className="royal-button" onClick={handlePost}>Post Entry</button>
      </div>

      <div className="royal-entries">
        {entries.map((entry, index) => (
          <div key={index} className="royal-entry fade-in">
            <div className="royal-time">{entry.time}</div>
            {entry.quote && <div className="royal-text"><strong>🪄 Quote:</strong> {entry.quote}</div>}
            {entry.idea && <div className="royal-text"><strong>🚀 Idea:</strong> {entry.idea}</div>}
            {entry.video && <video className="royal-video" src={entry.video} controls />}
            <button className="royal-delete-button" onClick={() => handleDelete(index)}>❌ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyalChronicle;
