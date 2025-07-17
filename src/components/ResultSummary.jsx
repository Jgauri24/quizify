import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ResultSummary.css"
const ResultSummary = ({ score, totalQuestions, correctAnswers, onReviewClick }) => {
const navigate=useNavigate();
const percentage=Math.round((score/totalQuestions)*100);

  return (
<div className="result-summary">
  <h2>Quiz Results</h2>
  <div className="result-stats">
    <div className="stat-item">
      <span className="stat-label">Score</span>
      <span className="stat-value">{score}/{totalQuestions}</span>
    </div>
    <div className="stat-item">
      <span className="stat-label">Percentage</span>
      <span className="stat-value">
      {percentage}%
      </span>
    </div>
    <div className="stat-item">
    <span className="stat-label">Correct Answers</span>
      <span className="stat-value">
   {correctAnswers}
      </span>
    </div>
  </div>
  <div className="result-actions">
    <button className="review-btn" onClick={onReviewClick}>
Review Answers
    </button>
    <button className="restart-btn" onClick={() => navigate('/quiz-setup')}>
                    Start New Quiz
                </button>
  </div>
</div>
  )
}

export default ResultSummary