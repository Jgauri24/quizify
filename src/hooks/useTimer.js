import { useEffect, useState } from "react";
function useTimer(initialTime, onTimeUp) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
  
    useEffect(() => {
      if (timeLeft <= 0) {
        onTimeUp();
        return;
      }
      const timer=setInterval(() => {
        setTimeLeft(el=>el-1)
      }, 1000);
      return ()=>clearInterval(timer)
    },[timeLeft,onTimeUp] )
    return timeLeft;} 
export default useTimer