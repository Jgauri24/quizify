import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numQuestions: 10,
    category: "general",
    level: "easy",
    timePerQuestion: 10,
    trialMode: false,
  });
  const categories = [
    {id:"general",name:"General Knowledge"},
    { id: "geography", name: "Geography" },
    { id: "technology", name: "Technology" },
    { id: "sports", name: "Sports" },
    { id: "entertainment", name: "Entertainment" },
    { id: "literature", name: "Literature" },
    { id: "history", name: "History" },
    { id: 'science', name: 'Science' },
  ];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timelimit = formData.trialMode ? 20 : formData.timePerQuestion;
    navigate("/quiz", { state: { ...formData, timePerQuestion: timelimit } });
  };
  return (
    <div className="quiz-setup-container">
      <div className="quiz-setup-content">
        <h2>Quiz Setup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="numQuestions">Number of Questions</label>
            <input
              type="number"
              id="numQuestions"
              name="numQuestions"
              min="1"
              max="20"
              value={formData.numQuestions}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              required
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="level">Difficulty Level</label>
            <select
              name="level"
              id="level"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="timePerQuestion">Time per Question (seconds)</label>
            <input
              type="number"
              id="timePerQuestion"
              name="timePerQuestion"
              min="5"
              max="45"
              value={formData.timePerQuestion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="trialMode"
                checked={formData.trialMode}
                onChange={handleChange}
              />
              Trial Mode (20 seconds per question)
            </label>
          </div>
          <button type="submit" className="start-quiz-btn">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizSetup;
