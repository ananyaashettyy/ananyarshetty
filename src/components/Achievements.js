import React, { useState } from "react";
import { mockAchievements } from "../data/mockData";
import { useTheme } from "../contexts/ThemeContext";
import "./Achievements.css";
import AchievementsModal from "./AchievementsModal";

const Achievements = () => {
  const { isDark } = useTheme();
  const themeClass = isDark ? "dark" : "light";
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className={`projects-section ${themeClass}`}>
      <h2>Achievements</h2>
      <p>Some highlights and recognitions from my academic and project work.</p>

      <div className="projects-grid">
        {mockAchievements.map((ach) => (
          <div
            key={ach.id}
            className={`project-card achievement-card ${themeClass}`}
            onClick={() => setSelected(ach)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelected(ach);
            }}
          >
            {ach.image ? (
              <img src={ach.image} alt={ach.title} className="achievement-image-box" />
            ) : (
              <div className="achievement-image-box">
                <span>{ach.organization}</span>
              </div>
            )}

            <h3>{ach.title}</h3>
            <p className="achievement-tag">{ach.designation}</p>
            <p className="achievement-description">{ach.description}</p>

            {ach.link && (
              <a href={ach.link} target="_blank" rel="noreferrer" className="achievement-link" onClick={(e) => e.stopPropagation()}>
                View publication
              </a>
            )}

            <div className="achievement-footer">
              <span>{ach.date}</span>
              <button type="button" className="view-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && <AchievementsModal achievement={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Achievements;
