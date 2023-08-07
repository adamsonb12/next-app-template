import { useEffect, useRef, useState } from "react";

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [timeWhenLastStopped, setTimeWhenLastStopped] = useState<number>(0);
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime + timeWhenLastStopped);
      }, 1000);
    } else if (interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
    }

    return () => clearInterval(interval.current);
  }, [startTime]);

  const startTimer = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setStartTime(0);
    setTimeWhenLastStopped(time);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setStartTime(0);
    setTimeWhenLastStopped(0);
    setTime(0);
  };

  const { days, hours, minutes, seconds } = getReturnValues(time);

  return {
    startTimer,
    pauseTimer,
    resetTimer,
    time,
    isRunning,
    days,
    hours,
    minutes,
    seconds,
  };
};

const getReturnValues = (time: number) => {
  // calculate time left
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return {
    days: days > 0 ? days : 0,
    hours: hours > 0 ? hours : 0,
    minutes: minutes > 0 ? minutes : 0,
    seconds: seconds > 0 ? seconds : 0,
  };
};
