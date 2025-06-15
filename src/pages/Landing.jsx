import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext"
import "./Landing.css";
import QuizyLogo from "../assets/QuizLogo";
const Landing = () => {
  const nagivate=useNavigate();
  const {logout}=useAuth()
  const handleLogout=async()=>{

try{
  await logout()
  nagivate("/login")
}
catch(err){
  console.error('Failed to log out:', err);
}
  }
  return (
    <div className="landing">
      <div className="landing-card">
        <QuizyLogo className="landing-img" />
        <h1>Welcome to Quizy!</h1>
        <p className="landing-tagline">
          Test your knowledge with fun quizzes. Ready to play?
        </p>
        <div className="landing-buttons">
          <button className="btn btn-primary" onClick={()=>nagivate("quiz-setup")}>
            Start Quiz
          </button>
          <button  className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
