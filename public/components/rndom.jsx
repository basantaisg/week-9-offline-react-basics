import { useEffect, useState } from 'react';

const rndom = () => {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer((currentValue) => !currentValue);
    }, 5000);
  }, []);

  return <div>{showTimer && <Timer />}</div>;
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      console.log(`Clean ups`);
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup functions
    return () => {
      clearInterval(clock);
    };
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

export default rndom;
