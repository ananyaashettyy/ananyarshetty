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

// Beyond Code skills/hobbies
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
    desc: "GitHub, Community Contributions",
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

// Education data
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

// Experience data
const experienceData = [
  {
    role: "React Developer Intern",
    company: "Incture Technologies",
    duration: "Jun 2024 – Aug 2024",
  },
];

// Languages data
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
      <div className="heading-container">
        <h1 className="main-heading">About Me</h1>
      </div>

      {/* LEFT SIDE */}
      <div className="about-left">
        {/* ---- Education ---- */}
        <div className="info-section">
          <h3>Education</h3>
          <div className="info-cards">
            {educationData.map((edu, idx) => (
              <div key={idx} className={`info-card ${isDark ? "dark" : "light"}`}>
                <p><span>{edu.institution}</span></p>
                <p>{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Experience ---- */}
        <div className="info-section">
          <h3>Experience</h3>
          <div className="info-cards">
            {experienceData.map((exp, idx) => (
              <div key={idx} className={`info-card ${isDark ? "dark" : "light"}`}>
                <p><span>{exp.role}</span></p>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Languages ---- */}
        <div className="info-section">
          <h3>Languages</h3>
          <div className="info-cards">
            {languagesData.map((lang, idx) => (
              <div key={idx} className={`info-card ${isDark ? "dark" : "light"}`}>
                <p>{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
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
