import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-links">
          <Link to="/" className="nav-title">
            Quizy
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
