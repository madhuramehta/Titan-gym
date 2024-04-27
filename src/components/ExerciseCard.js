import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSaved = () => {
    setIsSaved(!isSaved);
    // Save or remove exercise from local storage
    let savedExercises = JSON.parse(localStorage.getItem('savedExercises')) || [];
    if (isSaved) {
      savedExercises = savedExercises.filter((savedExercise) => savedExercise.id !== exercise.id);
    } else {
      savedExercises.push(exercise);
    }
    localStorage.setItem('savedExercises', JSON.stringify(savedExercises));
  };

  return (
    <div className="exercise-card">
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      </Link>
      <Stack direction="row">
        <Button
          sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
        >
          {exercise.target}
        </Button>
        <Button
          onClick={toggleSaved}
          sx={{
            ml: '21px',
            color: '#fff',
            background: isSaved ? '#4CAF50' : '#FF2625', // Change color based on saved state
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {isSaved ? 'Unsave' : 'Save'}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: '24px', xs: '20px' } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </div>
  );
};

export default ExerciseCard;
