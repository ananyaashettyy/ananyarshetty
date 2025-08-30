import React, { useState } from "react";
import Projects from "./Projects";
import ProjectModal from "./ProjectModal";
import { useTheme } from "../contexts/ThemeContext";

const Portfolio = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleModalClose = () => setSelectedProject(null);

  return (
    <section id="portfolio">
      <Projects onProjectClick={handleProjectClick} isDark={isDark} />
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleModalClose} />}
    </section>
  );
};

export default Portfolio;
