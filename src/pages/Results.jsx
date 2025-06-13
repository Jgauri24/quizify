
import React from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import Score from "../components/Score";
import "./Results.css"

const Results = () => {
    const location=useLocation();
    const navigate =useNavigate();
    const {score}=location.state || {score:0};
    const username=localStorage.getItem("username")
    const PlayAgain=()=>{
navigate("/");
    }
  return (
   <div className="result-container">
    <div className="result-card">
        <h2>Quiz Completed!</h2>
        <p className="username">Player:{username}</p>

    </div>
   </div>
  )
}

export default Results