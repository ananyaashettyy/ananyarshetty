import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./ProjectModal.css"; // reuse modal styling

const ExperienceModal = ({ experience, onClose }) => {
  const { isDark } = useTheme();
  if (!experience) return null;

  const themeClass = isDark ? "dark" : "light";

  return (
    <div className={`modal-overlay ${themeClass}`}>
      <div className={`modal-content ${themeClass}`}>
        <button className={`close-btn ${themeClass}`} onClick={onClose}>X</button>

        {experience.logo && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <img src={experience.logo} alt={experience.company} style={{ maxHeight: "80px", maxWidth: "200px", objectFit: "contain" }} />
          </div>
        )}

        <h2 className="modal-title">{experience.title}</h2>
        <p style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", color: isDark ? "#66b2ff" : "#0056b3" }}>
          {experience.company}
        </p>
        <p className="modal-description">{experience.description}</p>

        <div className="modal-tech">
          <h3>Details</h3>
          <div style={{ marginBottom: 8 }}>
            <strong>Location:</strong> {experience.location}
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Duration:</strong> {experience.startDate} – {experience.endDate} ({experience.duration})
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Technologies:</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  padding: "4px 12px",
                  borderRadius: "20px",
                  background: isDark ? "#333" : "#e8f4f8",
                  color: isDark ? "#66b2ff" : "#0056b3",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 style={{ marginTop: "16px" }}>Key Achievements</h3>
          <ul style={{ marginLeft: "20px", lineHeight: "1.8", color: isDark ? "#ccc" : "#444" }}>
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
