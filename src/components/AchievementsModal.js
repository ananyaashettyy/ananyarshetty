import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./ProjectModal.css"; // reuse modal styling

const AchievementsModal = ({ achievement, onClose }) => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!achievement) return null;

  const themeClass = isDark ? "dark" : "light";
  const imageList = achievement.images && achievement.images.length > 0 ? achievement.images : achievement.image ? [achievement.image] : [];
  const currentImage = imageList[currentIndex] || achievement.image;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`modal-overlay ${themeClass}`}>
      <div className={`modal-content ${themeClass}`}>
        <button className={`close-btn ${themeClass}`} onClick={onClose}>X</button>

        {currentImage && (
          <div style={{ position: "relative" }}>
            <img src={currentImage} alt={achievement.title} className="modal-img" />

            {imageList.length > 1 && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", gap: "12px" }}>
                <button type="button" onClick={goToPrevious} style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "none", background: isDark ? "#333" : "#dfefff", color: isDark ? "#fff" : "#003366", cursor: "pointer", fontWeight: 700 }}>
                  Prev
                </button>
                <span style={{ fontSize: "12px", color: isDark ? "#ddd" : "#333" }}>
                  {currentIndex + 1} / {imageList.length}
                </span>
                <button type="button" onClick={goToNext} style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "none", background: isDark ? "#333" : "#dfefff", color: isDark ? "#fff" : "#003366", cursor: "pointer", fontWeight: 700 }}>
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        <h2 className="modal-title">{achievement.title}</h2>
        <p className="modal-description">{achievement.description}</p>

        {achievement.link && (
          <p className="modal-description">
            <a href={achievement.link} target="_blank" rel="noreferrer" style={{ color: isDark ? "#66b2ff" : "#0056b3", fontWeight: 700 }}>
              Access publication here
            </a>
          </p>
        )}

        <div className="modal-tech">
          <h3>Details</h3>
          <div style={{ marginBottom: 8 }}><strong>{achievement.designation}</strong> — {achievement.organization}</div>
          <div style={{ color: isDark ? "#ccc" : "#444" }}>{achievement.date}</div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;
