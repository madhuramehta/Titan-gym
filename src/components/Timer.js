import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.gif';

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  const formatTime = (currentTime) => {
    const getSeconds = `0${(currentTime / 1000) % 60}`.slice(-2);
    const minutes = `${Math.floor(currentTime / 60000)}`.padStart(2, '0');
    const milliseconds = `0${(currentTime % 1000)}`.slice(-3);

    return `${minutes} : ${getSeconds} : ${milliseconds}`;
  };

  return (
    <div className="container">
      <Box sx={{ mt: { lg: '112px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="66px">Titan Gym</Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        <div className="timer">
          <h1>Stopwatch</h1>
          <div className="timer-display" style={{ fontSize: '50px' }}>
            {formatTime(timer)}
          </div>
          <div className="timer-buttons" style={{ marginTop: '10px' }}>
            <button type="button" style={{ textDecoration: 'none', width: '150px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px', marginRight: '10px' }} onClick={startTimer}>Start</button>
            <button type="button" style={{ textDecoration: 'none', width: '150px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px', marginRight: '10px' }} onClick={stopTimer}>Stop</button>
            <button type="button" style={{ textDecoration: 'none', width: '150px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px' }} onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </Box>
      <footer style={{ marginTop: '500px' }}>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
}

export default Timer;
