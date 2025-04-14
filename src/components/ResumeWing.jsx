import React from "react";
import ResumeCard from "../components/ResumeCard";
import "../styles/ResumeWing.css";

const ResumeWing = () => {
  const resumeData = [
    {
      title: "Python Intern",
      company: "CodeNova Pvt Ltd",
      duration: "Mar 2025 - Present",
      description: "Built optimized Flask APIs and automated reports using Pandas and Requests.",
    },
    {
      title: "Web Developer Intern",
      company: "TechElite",
      duration: "June 2024 - Sept 2024",
      description: "Developed responsive MERN stack interfaces and integrated real-time WebSocket updates.",
    },
    {
      title: "GoLang Specialist",
      company: "Freelance",
      duration: "Jan 2024 - Apr 2024",
      description: "Built concurrent Go microservices for scalable fintech backend systems.",
    },
  ];

  return (
    <section className="resume-wing">
      <h2 className="wing-title">🪪 The Résumé Wing</h2>
      <div className="resume-card-container">
        {resumeData.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            company={item.company}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ResumeWing;
