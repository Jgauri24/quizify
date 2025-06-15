import React from "react";
import { useNavigate, Link, } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "./Navbar.css"
const Navbar = () => {
  const navigate=useNavigate()
  const {logout}=useAuth()
  const handleLogout = async () => {
    try {
        await logout();
        navigate('/login');
    } catch (error) {
        console.error('Failed to log out:', error);
    }
};
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-links">
          <Link to="/" className="nav-title">
            Quizify
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="nav-right">
        <button className="logout-btn" onClick={handleLogout}>
        Logout
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
