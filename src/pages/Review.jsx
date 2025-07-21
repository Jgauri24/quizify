import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollReview from '../components/ScrollReview';
import './Review.css';
const Review = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const {questions,userAnswers}=location.state || {};
  if (!questions||!userAnswers){
<div className="review-container">
  <div className="review-content">
    <div className="error-message">
    <h2>No Quiz Data Available</h2>
                        <p>Please complete a quiz first to see your answers.</p>
                        <button className="back-btn" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
    </div>
  </div>
</div>
  }
  return (
  <div className="review-conatiner">
    <div className="review-content">
      <ScrollReview questions={questions} userAnswers={userAnswers} />
      </div>
    </div>

  )
}

export default Review