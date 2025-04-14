import React from "react";
import ChartCard from "../components/ChartCard";
import "../styles/CommandRoom.css";

const CommandRoom = () => {
  return (
    <div className="command-room">
      <h1 className="command-title">Live Command Room</h1>

      <div className="chart-grid">
        <ChartCard title="Visitors Today" value={4521} unit="👤" />
        <ChartCard title="Active Sessions" value={312} unit="⚡" />
        <ChartCard title="AI Insights" value={98} unit="🧠" />
      </div>

      <div className="tech-ticker">
        <span>⚛️ React</span>
        <span>🐍 Python</span>
        <span>🧠 TensorFlow</span>
        <span>📡 MQTT</span>
        <span>🌐 WebXR</span>
        <span>📊 PostgreSQL</span>
      </div>
    </div>
  );
};

export default CommandRoom;
