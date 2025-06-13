import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestions = JSON.parse(
      localStorage.getItem("quizQuestions") || "[]"
    );
    setQuestions(storedQuestions);
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem("quizScore", score.toString());
      navigate("/result");
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h1>
        Question {currentQuestionIndex + 1} of {questions.length}
      </h1>
      <p>{currentQuestion.question}</p>
      {answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
