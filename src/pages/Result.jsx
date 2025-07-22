import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultSummary from '../components/ResultSummary';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();


  if (!location.state) {
    return (
      <div className="result-container">
        <div className="result-content">
          <h2>No result data found.</h2>
          <button onClick={() => navigate('/quiz-setup')} className="restart-btn">
            Go to Quiz Setup
          </button>
        </div>
      </div>
    );
  }

  const { score, totalQuestions, userAnswers, questions } = location.state;


  const correctAnswers = questions?.filter(
    (q, index) => q.correctAnswer === userAnswers[index]
  ).length || 0;

  const handleReviewClick = () => {
    navigate('/review', {
      state: {
        questions,
        userAnswers
      }
    });
  };

  return (
    <div className="result-container">
     
      <div className="result-content">
        <ResultSummary
          score={score}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          onReviewClick={handleReviewClick}
        />
      </div>
    </div>
  );
};

export default Result;
