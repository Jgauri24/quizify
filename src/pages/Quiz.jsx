import React,{useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';
import questionsData from '../data/questions.json';
const Quiz = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const {numQuestions,category,level,timePerQuestion}=location.state;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  useEffect(()=>{
    const categoryQuestions=questionsData[category]?.[level] ||[];
    const shuffledQuestions = [...categoryQuestions]
    .sort(()=>Math.random()-0.5)
    .slice(0,numQuestions);
    setQuestions(shuffledQuestions)
  },[category,level,numQuestions])

  const handleTimeUp=()=>{
    handleNextQuestion()
  }
  const timeLeft=useTimer(timePerQuestion,handleTimeUp)
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer); 
  };
  const handleNextQuestion=()=>{
const updatedAnswers=[...userAnswers,selectedAnswer||""]
setUserAnswers(updatedAnswers)
if (selectedAnswer===questions[currentQuestionIndex].correctAnswer){
  setScore(el=>el+1)
}
if (updatedAnswers.length===questions.length){
  navigate("/result",{
    state:{
      score,
      totalQuesions:questions.length,
      userAnswers: updatedAnswers,
                        questions
    }
  })
}
if (questions.length === 0) {
  return <div>Loading...</div>;
}


  }
  const currentQuestion = questions[currentQuestionIndex];
  return (
<div className='quiz-container'>
  <Navbar/>
  <div className='quiz-content'>
    <div className="quiz-progress">
      Question {currentQuestionIndex+1} of {questions.length}
    </div>
    <Timer timeLimit={timePerQuestion} onTimeUp={handleNextQuestion}/>
    <QuestionCard 
   question={currentQuestion.question}
   options={currentQuestion.options}
   selectedAnswer={selectedAnswer}
   onSelect={handleAnswerSelect}
   isDisabled={timeLeft === 0}/>
   <button
   className='next-btn'
   onClick={handleNextQuestion}
   disabled={!selectedAnswer && timeLeft>0}>
    {currentQuestionIndex===questions.length -1? 'Finish Quiz' : 'Next Question'}
   </button>
  </div>
</div>
  )
}

export default Quiz