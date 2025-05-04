import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css"
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className={`Navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="container">
        <Link to="/" className="nav-title">
          Quizy🧩
        </Link>
        <button onClick={toggleTheme} className="toggle-theme">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
