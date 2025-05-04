import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      localStorage.setItem("difficulty", difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Quizy</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            
            className={`form-input ${isDarkMode ? "dark" : "light"}`}
            required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Difficulty Level</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className={`form-input ${isDarkMode ? "dark" : "light"}`}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
