import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <div className="about-content">
      <h1>About</h1>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Quizy is designed to make learning fun and engaging through interactive quizzes.
          We believe that knowledge should be accessible and enjoyable for everyone.
        </p>
      </div>
      <div className="about-section">
        <h2>Features</h2>
        <ul>
          <li>Multiple categories to choose from</li>
          <li>Different difficulty levels</li>
          <li>Real-time scoring system</li>
          <li>Global leaderboard</li>
          <li>Responsive design for all devices</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>How to Play</h2>
        <ol>
          <li>Create an account or login</li>
          <li>Choose your preferred category</li>
          <li>Select difficulty level</li>
          <li>Answer questions within the time limit</li>
          <li>Check your score and compete on the leaderboard</li>
        </ol>
      </div>
    </div>
  </div>
);

export default About;