import React from 'react';
import './ResumeWing.css';
import ResumeCard from './ResumeCard';

const experiences = [
  {
    title: 'Python Developer Intern',
    company: 'Quantum Fintech Ltd.',
    duration: 'Jan 2025 – Apr 2025',
    details: 'Developed backend APIs using Flask. Integrated AI modules for investment predictions.',
  },
  {
    title: 'Frontend Developer',
    company: 'GatsbyTech',
    duration: 'Jul 2024 – Dec 2024',
    details: 'Built interactive dashboards using React and Tailwind. Focused on luxury-style UI/UX.',
  },
];

const ResumeWing = () => {
  return (
    <section className="resume-wing" id="resume">
      <h2 className="resume-title">📜 My Experience</h2>
      <div className="resume-cards">
        {experiences.map((exp, index) => (
          <ResumeCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ResumeWing;
