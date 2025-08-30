import React from "react";
import { useTheme } from "../contexts/ThemeContext"; 
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@14.11.0/icons/langchain.svg" },
    ]
  },
  {
    title: "Databases / Cloud",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    ]
  },
  {
    title: "Libraries",
    skills: [
      { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
      { name: "Pandas", icon: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
      { name: "Matplotlib", icon: "https://matplotlib.org/_static/images/logo2.svg" },
      { name: "scikit-learn", icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
      { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/chat-dots.svg" },
      { name: "Strategic Thinking", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/diagram-3.svg" },
      { name: "Team Management", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/people.svg" },
    ]
  }
];

const Skills = () => {
  const { isDark } = useTheme();

  const leftCategories = skillCategories.slice(0, 3);
  const rightCategories = skillCategories.slice(3, 6);

  return (
    <section id="skills" className={`skills-section ${isDark ? "dark" : "light"}`}>
      <h2>Key Skills</h2>
      <div className="skills-columns">
        {/* Left Column */}
        <div className="skills-column">
          {leftCategories.map((category, i) => (
            <div key={i} className={`skill-category-box ${isDark ? "dark" : "light"}`}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={`skill-card ${isDark ? "dark" : "light"}`}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <div className={`skill-name ${isDark ? "dark" : "light"}`}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="skills-column">
          {rightCategories.map((category, i) => (
            <div key={i} className={`skill-category-box ${isDark ? "dark" : "light"}`}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={`skill-card ${isDark ? "dark" : "light"}`}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <div className={`skill-name ${isDark ? "dark" : "light"}`}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
