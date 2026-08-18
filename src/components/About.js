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

// Beyond Code skills / hobbies
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
    institution: "Sahyadri College of Engineering and Management",
    degree: "B.E., Information Science & Engineering",
    period: "2022–2026",
    percentage: "",
  },
  {
    institution: "Sri Venkatramana Pre-University College, Kundapur",
    degree: "Grade 12, PCMC",
    period: "2020–2022",
    percentage: "95%",
  },
  {
    institution: "Sri Venkatramana English Medium School, Kundapur",
    degree: "Grade 10, Science & Mathematics",
    period: "2019–2020",
    percentage: "97.44%",
  },
];

// Languages data
const languagesData = [
  "English (Professional Working Proficiency)",
  "Hindi (Professional Working Proficiency)",
  "Kannada (Native Proficiency)",
  "Japanese (Intermediate)",
];

// Certifications data
const certificationsData = [
  "Introduction to Generative AI — Infosys",
  "Introduction to Networking — Cisco Networking Academy",
  "AWS Fundamentals — Great Learning",
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`about-section ${isDark ? "dark" : "light"}`}
      id="about"
    >
      {/* Page Heading */}
      <div className="heading-container">
        <h1 className="main-heading">About Me</h1>
      </div>

      {/* ================= LEFT SIDE ================= */}
      <div className="about-left">

        {/* ---- Education ---- */}
        <div className="info-section">
          <h3>Education</h3>

          <div className="info-cards">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`info-card ${isDark ? "dark" : "light"}`}
              >
                <p>
                  <span>{edu.institution}</span>
                </p>

                <p>{edu.degree}</p>

                <p>{edu.period}</p>

                {edu.percentage && <p>{edu.percentage}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* ---- Languages ---- */}
        <div className="info-section">
          <h3>Languages</h3>

          <div className="info-cards">
            {languagesData.map((lang, idx) => (
              <div
                key={idx}
                className={`info-card ${isDark ? "dark" : "light"}`}
              >
                <p>{lang}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Certifications ---- */}
        <div className="info-section">
          <h3>Certifications</h3>

          <div className="info-cards">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className={`info-card ${isDark ? "dark" : "light"}`}
              >
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="about-right">

        <h3>Beyond Code</h3>

        <p className="beyond-desc">
          Here's a glimpse of hobbies, passions, and interests that keep me
          inspired...
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