import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const targetTime = Date.now() + 60 * 60 * 1000;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown is over!</span>;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div>
      <center><h1><Countdown date={targetTime} renderer={renderer} /></h1></center>
    </div>
  );
};

export default CountdownTimer;