import React, { useState } from "react";
import { mockProjects } from "../data/mockData";
import { FaInfoCircle, FaGithub, FaLink } from "react-icons/fa";
import "./Projects.css";

const Projects = ({ onProjectClick, isDark }) => {
  const themeClass = isDark ? "dark" : "light";

  return (
    <section id="projects" className={`projects-section ${themeClass}`}>
      <h2>Projects</h2>
      <p>
        A showcase of my development work, featuring applications built with modern technologies
      </p>

      <div className="projects-grid">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectClick={onProjectClick}
            themeClass={themeClass}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onProjectClick, themeClass }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTech = showAll ? project.technologies : project.technologies.slice(0, 3);

  return (
    <div className={`project-card ${themeClass}`}>
      <div className="img-container">
        <img src={project.image} alt={project.title} className="project-img" />

        {/* Details button - left bottom */}
        <button
          className={`overlay-btn overlay-left ${themeClass}`}
          onClick={() => onProjectClick(project)}
        >
          <FaInfoCircle style={{ marginRight: "5px" }} /> Details
        </button>

        {/* GitHub & Demo - right bottom */}
        <div className="overlay-right">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="overlay-btn github-btn"
          >
            <FaGithub />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="overlay-btn demo-btn"
          >
            <FaLink />
          </a>
        </div>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-badges">
        {visibleTech.map((tech, index) => (
          <span key={index} className={`tech-badge ${themeClass}`}>
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && !showAll && (
          <button className="more-btn" onClick={() => setShowAll(true)}>
            + More
          </button>
        )}
      </div>

      {/* Bottom "View Details" button */}
      <div className="card-bottom-btn">
        <button className="view-btn" onClick={() => onProjectClick(project)}>
          <FaInfoCircle style={{ marginRight: "5px" }} /> View Details
        </button>
      </div>
    </div>
  );
};

export default Projects;
