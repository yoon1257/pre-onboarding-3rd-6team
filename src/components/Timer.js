import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) < 60) {
        setSeconds(parseInt(seconds) + 1);
      }
      if (parseInt(seconds) === 59) {
        setSeconds(0);
        setMinutes(parseInt(minutes) + 1);
      }
      //   else {
      //     타이머 종료
      //     clearInterval(countdown);
      //   }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <h2>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </h2>
  );
}
