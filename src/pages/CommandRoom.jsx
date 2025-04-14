import React from "react";
import ChartCard from "../components/ChartCard";
import "../styles/CommandRoom.css";

const CommandRoom = () => {
  const metrics = [
    { title: "Visitors Today", value: 4521, unit: "👤" },
    { title: "Active Sessions", value: 312, unit: "⚡" },
    { title: "AI Insights", value: 98, unit: "🧠" },
    { title: "Commits", value: "1,432", unit: "💾" },
    { title: "Lines of Code", value: "47,890", unit: "🧬" },
    { title: "Deployments", value: "14", unit: "🚀" },
  ];

  return (
    <div className="command-room">
      <h1 className="command-title">Live Command Room</h1>

      <div className="chart-grid">
        {metrics.map((item, index) => (
          <ChartCard
            key={index}
            title={item.title}
            value={`${item.value} ${item.unit}`}
          />
        ))}
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
