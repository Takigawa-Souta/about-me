import React from 'react';
import SkillsHeader from '../components/SkillsHeader';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Vue.js', 'Node.js', 'Django'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Webpack', 'Vite'],
  };

  return (
    <div className="skills-container">
      <SkillsHeader />
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            {skills.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            {skills.frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Databases</h3>
          <ul>
            {skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Tools</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
