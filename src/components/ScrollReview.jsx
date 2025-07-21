import React from "react";
import "./ScrollReview.css";
const ScrollReview = ({ questions, userAnswers }) => {
  return (
    <div className="scroll-review">
      <h2>Review your Answers</h2>
      <div className="question-list">
        {questions.map((el, i) => {
          const userAnswer = userAnswers[i];
          const isCorrect = userAnswer === el.correctAnswer;
          return (
            <div
              key={i}
              className={`question-review ${
                isCorrect ? "correct" : "incorrect"
              }`}
            >
              <p className="question-text">{el.question}</p>
              <div className="options-list">
                {el.options.map((o, index) => (
                  <div
                    key={index}
                    className={`option ${
                      o === el.correctAnswer ? "correct-option" : ""
                    }
             ${o === userAnswer ? "user-answer" : ""}`}
                  >
                    {o}
                  </div>
                ))}
              </div>
              <div className="answers">
                <div className="answer-item">
                  <span className="answer-label">Your Answer:</span>
                  <span
                    className={`answer-value ${
                      isCorrect ? "correct" : "incorrect"
                    }`}
                  >
                    {userAnswer}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="answer-item">
                    <span className="answer-label">Correct Answer:</span>
                    <span className="answer-value correct">
                      {el.correctAnswer}
                    </span>
                  </div>
                )}
                <div className="answer-status">
                  {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollReview;
