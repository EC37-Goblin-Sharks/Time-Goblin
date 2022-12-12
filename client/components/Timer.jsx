import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  // Credits: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('25');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1499); // 25 minutes * 60 seconds - 1 second for the setInterval delay

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter - 1);
        if (counter === 0) {
          // post request to update score
          // props.addPointsDb();
          setIsActive(!isActive);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function resetTimer() {
    setIsActive(false);
    setCounter(1499);
    setMinute('25');
    setSecond('00');
  }

  return (
    <div className='container'>
      <div className='time'>
        <span className='minute'>{minute}</span>
        <span>:</span>
        <span className='second'>{second}</span>
      </div>
      <div className='buttons'>
        <button onClick={() => setIsActive(!isActive)} className='start'>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} className='reset'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
