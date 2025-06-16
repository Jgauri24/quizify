import React from "react";
import "./QuestionCard.css";
const QuestionCard = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  isDisabled,
}) => {
  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>
      <div className="options-container">
        {options.map((el, i) => (
          <button
            className={`option-btn ${selectedAnswer === el ? "selected" : ""}`}
            key={i}
            onClick={() => onSelect(el)}
            disabled={isDisabled}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
