import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-scroll";  // ✅ import Link
import "./Header.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`header ${isDark ? "dark" : ""}`}>
      <div className="header-name">Ananya R Shetty</div>
      <nav className="header-nav">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </header>
  );
};

export default Header;
