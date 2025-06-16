import React,{useState,useEffect} from 'react'
import "./Timer.css"
const Timer = ({timeLimit,onTimeUp}) => {
  const [timeLeft,setTimeLeft]=useState(timeLimit)
  useEffect(()=>{
    if (timeLeft<=0){
      onTimeUp()
      return
    }
    const timer=setInterval(()=>{
      setTimeLeft(el=>el-1)
    },1000)
    return ()=>clearInterval(timer)
  },[timeLeft,onTimeUp])
  return (
<div className="timer">
<div className="timer-circle">
  <span className="timer-text">{timeLeft}s</span>
</div>
</div>

  )
}

export default Timer