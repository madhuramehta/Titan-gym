import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard'; // Import ExerciseCard component

const Saved = () => {
  const [savedExercises, setSavedExercises] = useState([]);

  useEffect(() => {
    // Retrieve saved exercises from local storage when component mounts
    const savedData = localStorage.getItem('savedExercises');
    if (savedData) {
      setSavedExercises(JSON.parse(savedData));
    }
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  const removeExercise = (exerciseId) => {
    // Remove exercise from saved exercises and update local storage
    const updatedExercises = savedExercises.filter((exercise) => exercise.id !== exerciseId);
    setSavedExercises(updatedExercises);
    localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
  };

  return (
    <div style={{ marginTop: '100px', marginLeft: '78px' }}>
      <h1>Saved Exercises</h1>
      {savedExercises.length > 0 ? (
        savedExercises.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard exercise={exercise} removeExercise={removeExercise} /> {/* Pass removeExercise function */}
          </div>
        ))
      ) : (
        <p>No saved exercises</p>
      )}
    </div>
  );
}

export default Saved;
