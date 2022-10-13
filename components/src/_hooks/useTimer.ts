import React from 'react';

export interface UseTimerProps {
  delay?: number;
  format?: (time: number) => string;
}

export const useTimer = (props?: UseTimerProps) => {
  const { delay = 1000, format = (time: number) => time } = props ?? {};
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
  };

  React.useEffect(() => {
    let interval: number | undefined = undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime(time + delay);
      }, delay);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return { time: format(time), isRunning, startTimer, stopTimer, resetTimer };
};
