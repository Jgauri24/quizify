
  import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Navbar from '../components/Navbar';

function About() {
    const navigate = useNavigate();

    return (
        <div className="about-container">
          <Navbar/>
            <div className="about-content">
                <h1>About Quizify</h1>

                <section className="about-section">
                    <h2>Welcome!</h2>
                    <p>
                        Quizify is an interactive platform designed to test your knowledge across various subjects.
                        Whether you're looking to challenge yourself or learn something new, our quizzes provide
                        an engaging and educational experience.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Features</h2>
                    <ul className="features-list">
                        <li>
                            <span className="feature-icon">📚</span>
                            <div className="feature-content">
                                <h3>Multiple Categories</h3>
                                <p>Choose from a variety of subjects including General Knowledge, Science, and more.</p>
                            </div>
                        </li>
                        <li>
                            <span className="feature-icon">🎯</span>
                            <div className="feature-content">
                                <h3>Difficulty Levels</h3>
                                <p>Test your skills with questions ranging from easy to hard difficulty levels.</p>
                            </div>
                        </li>
                        <li>
                            <span className="feature-icon">⏱️</span>
                            <div className="feature-content">
                                <h3>Timed Quizzes</h3>
                                <p>Challenge yourself with time-limited questions to enhance your quick thinking.</p>
                            </div>
                        </li>
                        <li>
                            <span className="feature-icon">📊</span>
                            <div className="feature-content">
                                <h3>Detailed Review</h3>
                                <p>Review your answers and learn from your mistakes with comprehensive feedback.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>How to Get Started</h2>
                    <ol className="steps-list">
                        <li>Create an account or log in to your existing account</li>
                        <li>Choose your preferred quiz category and difficulty level</li>
                        <li>Answer the questions within the time limit</li>
                        <li>Review your results and learn from your mistakes</li>
                    </ol>
                </section>

              

                <button className="start-btn" onClick={() => navigate('/')}>
                    Start Quizzing
                </button>
            </div>
        </div>
    );
}

export default About; 