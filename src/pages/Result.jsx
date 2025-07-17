import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ResultSummary from '../components/ResultSummary';
import './Result.css';
const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, userAnswers, questions } = location.state;

  const correctAnswers=questions.filter((q,i)=>
    q.correctAnswer === userAnswers[i]).length
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
    correctAnswers={correctAnswers}
    onReviewClick={handleReviewClick}
    totalQuestions={totalQuestions}/>
  </div>

</div>
  )
}

export default Result