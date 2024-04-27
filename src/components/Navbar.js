import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '3px', xs: '40px' }, mt: { sm: '22px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '60px', height: '60px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="20px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises</a>
        <a href="Saved" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Saved</a>
        <a href="Timer" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Timer</a>
        <a href="BMIChecker" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>BMI Check</a>
        <Button variant="contained" onClick={handleLogout} style={{ height: '40px', fontSize: '15px', textDecoration: 'none', fontFamily: "Alegreya", color: '#3A1212', backgroundColor: '#FFF', border: 'none', borderBottom: '3px solid #FF2625' }}>Logout</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
