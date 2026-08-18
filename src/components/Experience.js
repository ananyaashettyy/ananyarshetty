import React, { useState } from "react";
import { mockExperience } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";
import "./Experience.css";
import ExperienceModal from "./ExperienceModal";

const Experience = () => {
  const { isDark } = useTheme();
  const themeClass = isDark ? "dark" : "light";
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className={`projects-section ${themeClass}`}>
      <h2>Experience</h2>
      <p>My professional journey and roles in different organizations.</p>

      <div className="projects-grid">
        {mockExperience.map((exp) => (
          <div
            key={exp.id}
            className={`project-card experience-card ${themeClass}`}
            onClick={() => setSelected(exp)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelected(exp);
            }}
          >
            {exp.logo ? (
              <img src={exp.logo} alt={exp.company} className="experience-logo" />
            ) : (
              <div className="experience-logo-placeholder">
                <span>{exp.company}</span>
              </div>
            )}

            <h3>{exp.title}</h3>
            <p className="company-name">{exp.company}</p>
            <p className="location">{exp.location}</p>
            <p className="experience-duration">
              {exp.startDate} – {exp.endDate}
            </p>

            <div className="tech-tags">
              {exp.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
              {exp.technologies.length > 3 && (
                <span className="tech-tag">+{exp.technologies.length - 3}</span>
              )}
            </div>

            <div className="experience-footer">
              <span>{exp.duration}</span>
              <button type="button" className="view-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && <ExperienceModal experience={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Experience;
