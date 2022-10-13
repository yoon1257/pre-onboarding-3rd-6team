import React, { useState, useEffect, useContext } from 'react';
import { RecordContext } from '../contexts/Context';

export default function Timer() {
  const { timer, recordStatus } = useContext(RecordContext);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setHours(parseInt(timer / 3600) < 10 ? '0' + parseInt(timer / 3600) : parseInt(timer / 3600));
    setMinutes(
      parseInt((timer % 3600) / 60) < 10 ? '0' + parseInt((timer % 3600) / 60) : parseInt((timer % 3600) / 60),
    );
    setSeconds(timer % 60 < 10 ? '0' + (timer % 60) : timer % 60);
  }, [timer]);

  //   const countdown = () => {
  //     if (parseInt(timer) < 60) {
  //       setSeconds(parseInt(timer) + 1);
  //     }
  //     if (parseInt(timer)%60 === 1) {
  //       setSeconds(0);
  //       setMinutes(parseInt(minutes) + 1);
  //     }
  //   };
  //   return countdown;
  // }, [timer]);

  return (
    <h2 className={recordStatus}>
      {hours}:{minutes}:{seconds}
    </h2>
  );
}
