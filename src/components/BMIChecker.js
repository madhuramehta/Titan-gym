import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.gif';
import UnderweightImage from '../assets/images/underweight.png';
import HealthyImage from '../assets/images/healthy.png';
import OverweightImage from '../assets/images/overweight.png';

function BMIChecker() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');
  const [imgSrc, setImgSrc] = useState(null);

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height) * 703).toFixed(1);
      setBMI(bmiValue);

      // Logic for message and image
      if (bmiValue < 25) {
        setMessage('You are underweight');
        setImgSrc(UnderweightImage);
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are a healthy weight');
        setImgSrc(HealthyImage);
      } else {
        setMessage('You are overweight');
        setImgSrc(OverweightImage);
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <Box sx={{ mt: { lg: '130px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="66px">Titan Gym</Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        <div className="bmi-checker">
          <h1>BMI Calculator</h1>
          <form onSubmit={calculateBMI} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <div style={{ marginRight: '20px', marginTop: '10px' }}>
                <label>Weight (lbs):</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} style={{ marginLeft: '10px', width: '55px' }} />
              </div>
              <div style={{ marginTop: '10px' }}>
                <label>Height (in):</label>
                <input value={height} onChange={(event) => setHeight(event.target.value)} style={{ marginLeft: '10px', width: '55px' }} />
              </div>
            </div>
            <div style={{ marginTop: '0px' }}>
              <Button
                className="btn"
                type="submit"
                sx={{
                  bgcolor: '#FF2625',
                  color: '#fff',
                  textTransform: 'none',
                  width: '150px',
                  height: '40px',
                  fontSize: '16px',
                  marginRight: '10px',
                  marginTop: 'px',
                }}
              >
                Submit
              </Button>
              <Button
                className="btn btn-outline"
                onClick={reload}
                type="button"
                sx={{
                  bgcolor: 'transparent',
                  color: '#FF2625',
                  textTransform: 'none',
                  width: '150px',
                  height: '40px',
                  fontSize: '16px',
                  border: '1px solid #FF2625',
                  marginTop: '0px',
                }}
              >
                Reload
              </Button>
            </div>
          </form>
          <div className="center" style={{ marginTop: '20px' }}>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
          {imgSrc && (
            <div className="img-container">
              <img src={imgSrc} alt="" />
            </div>
          )}
        </div>
      </Box>
      <footer style={{ marginTop: '500px' }}>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
}

export default BMIChecker;
