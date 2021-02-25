import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import useTimer from './useTimer';
import './ToDoList.css'

const OurTimer = (props) => {
  const roomId =  props.room;
  const {start, sendStart} = useTimer(roomId)
  const [work, setWork] = useState(true);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  //function for decrementing timer
  const decrement = () => {
    if (start === true) {
      const intervalId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }

  //calls decrement every time start changes
  useEffect(decrement, [start]);


  //function for adjusting display time
  const time = () => {
    if (start === true){
      if (seconds === -1 && minutes !== 0) {
        setSeconds(59);
        setMinutes((prev) => prev - 1);
      } else if (minutes === 0 && seconds === -1 && work === true ) {
        setMinutes(5);
        setSeconds(0);
        setWork(false);
      } else if (minutes === 0 && seconds === -1 && work === false) {
        setMinutes(25);
        setSeconds(0);
        setWork(true);
      }
    }
  }

  //calls time on every re-render
  useEffect(time);

  //click handlers
  const handleStart = () => sendStart(start);

  const handleWork = () => {
    setWork(!work)
    if (work === true){
      setMinutes(5);
      setSeconds(0);
    } else {
      setMinutes(25);
      setSeconds(0);
    }
  }

  //variables for display
  let startStatus = (start ? 'STOP' : 'START');
  let workStatus = (work ? 'REST' : 'WORK');
  //adds zero when seconds gets into single digits
  let secondsDisplay;
  if (seconds < 10) {
    secondsDisplay = '0'+seconds
  } else {
    secondsDisplay = seconds
  }

  

  return (
    
    <section>
        
        <section className="timerTimer">
          <div>
            <div className = 'buttons'>
              <Button variant="secondary" onClick={handleStart} >{startStatus}</Button>{' '}
              <Button variant="secondary" onClick ={handleWork} >{workStatus}</Button>{' '} 
            </div> 
            <h1 className='timerMargin'>{minutes + ':' + secondsDisplay}</h1>
          </div>

      </section> 
    </section>
  )
}

export default OurTimer
