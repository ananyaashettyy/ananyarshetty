import React from "react";
import { FaExternalLinkAlt, FaCode, FaGithub, FaYoutube, FaBookOpen, FaUtensils } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // theme hook
import "./About.css";

const skills = [
  { icon: <FaCode />, title: "Problem Solving", desc: "LeetCode & Algorithm Challenges", link: "https://leetcode.com/u/ananyaashettyy/" },
  { icon: <FaGithub />, title: "Open Source Contributor", desc: "GitHub, Community Contributions", link: "https://github.com/ananyaashettyy/" },
  { icon: <FaUtensils />, title: "Ananya-Recipes", desc: "Culinary Adventures & Recipes", link: "https://ananya-recipes.vercel.app/" },
  { icon: <FaBookOpen />, title: "Pratilipi", desc: "Kannada Poems & Stories", link: "https://kannada.pratilipi.com/user/ananya-r-shetty-wc67nb2981?utm_campaign=general&utm_source=web_share" },
  { icon: <FaYoutube />, title: "YouTube Vlogging", desc: "Life & Experience Vlogs", link: "https://www.youtube.com/channel/UCeKqw-RcAETYIhQWTlH2YPw" },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section className={`about-section ${isDark ? "dark" : "light"}`} id="about">
      <div className="about-left">
        <h2>About Me</h2>
        <p>Focused and enthusiastic developer with a keen interest in software development and AI...</p>
        <div className="personal-info">
          <p><strong>Birthday:</strong> 27 August 2004</p>
          <p><strong>Phone:</strong> +91 8861955088</p>
          <p><strong>City:</strong> Mangalore, India</p>
          <p><strong>Email:</strong> ananyashetty82987@gmail.com</p>
        </div>
      </div>

      <div className="about-right">
        <h2>Beyond Code</h2>
        <p className="beyond-desc">Here’s a glimpse of the hobbies, passions, and interests that keep me inspired...</p>
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
