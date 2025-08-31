import React from "react";
import {
  FaExternalLinkAlt,
  FaCode,
  FaGithub,
  FaYoutube,
  FaBookOpen,
  FaUtensils,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import "./About.css";

const skills = [
  {
    icon: <FaCode />,
    title: "Problem Solving",
    desc: "LeetCode & Algorithm Challenges",
    link: "https://leetcode.com/u/ananyaashettyy/",
  },
  {
    icon: <FaGithub />,
    title: "Open Source Contributor",
    desc: "GitHub, Commun Contributions",
    link: "https://github.com/ananyaashettyy/",
  },
  {
    icon: <FaUtensils />,
    title: "Ananya-Recipes",
    desc: "Culinary Adventures & Recipes",
    link: "https://ananya-recipes.vercel.app/",
  },
  {
    icon: <FaBookOpen />,
    title: "Pratilipi",
    desc: "Kannada Poems & Stories",
    link: "https://kannada.pratilipi.com/user/ananya-r-shetty-wc67nb2981",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Vlogging",
    desc: "Life & Experience Vlogs",
    link: "https://www.youtube.com/channel/UCeKqw-RcAETYIhQWTlH2YPw",
  },
];

const educationData = [
  {
    institution: "Sahyadri College Of Engineering And Management [2026]",
    degree: "B.E., Information Science and Engineering",
  },
  {
    institution: "Sri Venkatramana PU College, Kundapur [2022]",
    degree: "Computer Science - 95%",
  },
  {
    institution: "Sri Venkatramana English Medium School [2020]",
    degree: "Science & Mathematics - 97.44%",
  },
];


  const experienceData = [
  {
    role: "React Developer Intern",
    company: "Incture Technologies",
    duration: "Jun 2024 – Aug 2024"
  },
];


const languagesData = [
  "English (Professional Working Proficiency)",
  "Hindi (Professional Working Proficiency)",
  "Kannada (Native Proficiency)",
  "Japanese (Intermediate)",
];

const About = () => {
  const { isDark } = useTheme();

  return (
   <section className={`about-section ${isDark ? "dark" : "light"}`} id="about">
  {/* Main Heading */}
  <div className="heading-container">
    <h1 className="main-heading">About Me</h1>
    </div>

      <div className="about-left">
        <h3>Education</h3>
        <div className="education">
        {educationData.map((edu, index) => (
  <div key={index} className="timeline-item">
    <p className="timeline-title"><strong>{edu.institution}</strong></p>
    <p className="timeline-content">{edu.degree}</p>
  </div>
))}

        </div>

       <h3>Experience</h3>
<div className="experience">
  {experienceData.map((exp, index) => (
    <div key={index} className="timeline-item">
      <p className="timeline-title">
        <strong>{exp.role}</strong> – {exp.company} [{exp.duration}]
      </p>
    </div>
  ))}
</div>


 <h3>Languages</h3>
        <div className="languages">
          <ul>
            {languagesData.map((lang, index) => {
              const match = lang.match(/^(.+?)\s*\((.+)\)$/); // Split name and proficiency
              return (
                <li key={index}>
                  <strong>{match ? match[1] : lang}</strong> {match ? `(${match[2]})` : ""}
                </li>
              );
            })}
          </ul>
        </div>
      </div>


      <div className="about-right">
        <h3>Beyond Code</h3>
        <p className="beyond-desc">
          Here's a glimpse of hobbies, passions, and interests that keep me inspired...
        </p>
        <div className={`cards ${isDark ? "dark" : "light"}`}>
          {skills.map((skill, i) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={`card ${isDark ? "dark" : "light"}`}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <FaExternalLinkAlt className="external-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
