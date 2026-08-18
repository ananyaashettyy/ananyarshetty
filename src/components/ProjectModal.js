import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // ✅ import theme
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  const { isDark } = useTheme(); // ✅ get theme
  if (!project) return null;

  const themeClass = isDark ? "dark" : "light";

  return (
    <div className={`modal-overlay ${themeClass}`}>
      <div className={`modal-content ${themeClass}`}>
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>X</button>

        {/* Image */}
        <img src={project.image} alt={project.title} className="modal-img" />

        {/* Title */}
        <h2 className="modal-title">{project.title}</h2>

        {/* Description */}
        <p className="modal-description">{project.description}</p>

        {/* GitHub and Live Demo buttons */}
        <div className="modal-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="modal-btn"
          >
            <FaGithub style={{ marginRight: "5px" }} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="modal-btn"
          >
            <FaLink style={{ marginRight: "5px" }} />
            Live Demo
          </a>
        </div>

        {/* Technologies */}
        <div className="modal-tech">
          <h3>Technologies</h3>
          <div className="tech-badges-container">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="modal-features">
          <h3>Key Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Project Details */}
        <div className="modal-details">
          <h3>Project Details</h3>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
