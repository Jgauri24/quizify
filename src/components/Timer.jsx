import React,{useState,useEffect} from 'react'

const Timer = ({timeLimit,onTimeUp}) => {
  const [timeLeft,setTimeLeft]=useState()
  useEffect(()=>{
    if (timeLeft<=0){
      onTimeUp()
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