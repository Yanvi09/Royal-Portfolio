import React from "react";
import ResumeCard from "../components/ResumeCard";
import "../styles/ResumeWing.css";

const ResumeWing = () => {
  const resumeData = [
    // Professional Experience
    
    
    // Certifications and Courses
    {
      title: "Programming with Google Go",
      company: "Coursera",
      duration: "March 2025",
      description: "Completed Google Go specialization on Coursera.",
    },
    {
      title: "Data Structure & Algorithm - Self-Paced (C++)",
      company: "GeeksforGeeks (GFG)",
      duration: "June 2024 - July 2024",
      description: "Mastered data structures and algorithms through GFG's self-paced course.",
    },
    {
      title: "IBM DevOps and Software Engineering Specialization",
      company: "Coursera",
      duration: "November 2024 – December 2024",
      description: "Completed IBM’s DevOps and Software Engineering specialization on Coursera.",
    },
    {
      title: "EF SET English Certificate",
      company: "EF SET",
      duration: "March 2025",
      description: "Achieved a C1 Advanced level (64/100) in English proficiency.",
    },
    {
      title: "Foundation of AR",
      company: "Self-Paced",
      duration: "June 2024 - July 2024",
      description: "Studied the foundational concepts of Augmented Reality (AR).",
    },
  ];

  return (
    <section id="formal-resume" className="resume-wing">
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
