import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginText from "../assets/LoginText";
import "./Login.css"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("medium");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      localStorage.setItem("passwordt", password);

      navigate("/quiz");
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <LoginText className="login-image"></LoginText>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
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
