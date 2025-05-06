import React from 'react'
import { Link } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
        <div className="landing-card">
        <img
          src="src/assets/landing-illustration.svg"
          alt="Quiz Illustration"
          className="landing-img"
        />
        <h1>
            Welcome to Quizy!🧩
        </h1>
        <p className="landing-tagline">
        Test your knowledge with fun quizzes. Ready to play?
        </p>
<div className="landing-buttons">
    <Link to="/quiz" className="btn btn-primary">
    Start Quiz
    </Link>
    <Link to="/about" className='btn btn-secondary'>
    Learn More
    </Link>
</div>
        </div>
    </div>
  )
}

export default Landing