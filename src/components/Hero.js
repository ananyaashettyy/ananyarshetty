import React from "react";
import "./Hero.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // Import theme hook

// Import images
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";

const resumeLink = "https://drive.google.com/file/d/1Z1jizgKyWhbaaQ5tKuJraka70FShJF8b/view?usp=sharing";

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12];

const Hero = () => {
  const { isDark } = useTheme(); // get current theme

  const rows = [
    images.slice(0, 4),
    images.slice(4, 8),
    images.slice(8, 12),
  ];

  return (
    <section className={`hero-section ${isDark ? "dark" : "light"}`} id="hero">
      {/* Left section */}
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Ananya R Shetty</span>
        </h1>
        <p className="hero-subtitle">Software Developer & AI Enthusiast</p>
        <p className="hero-description">
          4th Year Information Science Student passionate about building innovative solutions
          with cutting-edge technologies and artificial Intelligence.
        </p>

        <div className="hero-buttons">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="hero-btn">
              <FaDownload style={{ marginRight: "5px" }} />
              Resume
            </button>
          </a>
          <a href="#contact">
            <button className="hero-btn">Get in Touch</button>
          </a>
        </div>

        <div className="hero-social">
          <a href="mailto:ananyashetty82987@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/ananyaashettyy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ananyaashettyy" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right honeycomb section */}
      <div className="hero-right">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`hex-row ${rowIndex % 2 !== 0 ? "offset" : ""}`}>
            {row.map((img, i) => (
              <div className="hex-img" key={i}>
                <div className="hex-cylinder">
                  <img src={img} alt={`Ananya ${rowIndex * 4 + i + 1}`} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
