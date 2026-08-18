import React from "react";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? "dark" : "light"}`}>
      <p>© 2026 Ananya R Shetty. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
