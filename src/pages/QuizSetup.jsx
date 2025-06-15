// import React, { useState, useEffect, useMemo } from "react";
// import quizData from "../data/questions.json";

// function QuizSetup({ config, onComplete, onLogout }) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(config.timeLimit);
//   const [questions, setQuestions] = useState([]);
//   const [showFeedback, setShowFeedback] = useState(false);

//   const shuffleArray = (array) => [...array].sort(() => 0.5 - Math.random());

//   const filteredQuestions = useMemo(() => {
//     let filtered = [...quizData.questions];
//     if (config.category !== "all") {
//       filtered = filtered.filter((q) => q.category.toLowerCase() === config.category);
//     }
//     if (config.difficulty !== "all") {
//       filtered = filtered.filter((q) => q.difficulty === config.difficulty);
//     }
//     const shuffled = shuffleArray(filtered).slice(0, 5);
//     return shuffled.map((q) => ({
//       ...q,
//       options: shuffleArray(q.options),
//     }));
//   }, [config]);

//   useEffect(() => {
//     setQuestions(filteredQuestions);
//   }, [filteredQuestions]);

//   useEffect(() => {
//     if (timeLeft > 0 && !showFeedback) {
//       const timer = setTimeout(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showFeedback) {
//       handleNextQuestion();
//     }
//   }, [timeLeft, showFeedback]);

//   const handleAnswerSelect = (answer) => {
//     if (showFeedback) return;
//     setSelectedAnswer(answer);
//     setShowFeedback(true);
//     if (answer === questions[currentQuestion].correctAnswer) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//       setSelectedAnswer(null);
//       setShowFeedback(false);
//       setTimeLeft(config.timeLimit);
//     } else {
//       onComplete({
//         score,
//         totalQuestions: questions.length,
//         timeLimit: config.timeLimit,
//       });
//     }
//   };

//   if (!questions.length) {
//     return (
//       <div className="container">
//         {quizData.questions.length === 0
//           ? "No questions available!"
//           : "Loading questions..."}
//       </div>
//     );
//   }

//   const question = questions[currentQuestion];
//   const progress = ((currentQuestion + 1) / questions.length) * 100;

//   return (
//     <div className="container">
//       <div className="quiz-header">
//         <button onClick={onLogout} className="logout-btn">
//           Logout
//         </button>
//         <div className="timer">Time Left: {timeLeft}s</div>
//       </div>

//       <div className="progress-bar">
//       <div className="progress" style={{ width: `${progress}%` }}></div>

//       </div>

//       <h2>
//         Question {currentQuestion + 1} of {questions.length}
//       </h2>
//       <p className="question">{question.question}</p>

//       <div className="options">
//         {question.options.map((option, index) => (
//           <div
//             key={index}
//             className={`option ${showFeedback ? "disabled" : ""} ${
//               showFeedback
//                 ? option === question.correctAnswer
//                   ? "correct"
//                   : option === selectedAnswer
//                   ? "incorrect"
//                   : ""
//                 : ""
//             }`}
//             onClick={() => handleAnswerSelect(option)}
//           >
//             {option}
//           </div>
//         ))}
//       </div>

//       {showFeedback && (
//         <button onClick={handleNextQuestion} className="next-btn">
//           {currentQuestion < questions.length - 1
//             ? "Next Question"
//             : "Finish Quiz"}
//         </button>
//       )}
//     </div>
//   );
// }

// export default QuizSetup;