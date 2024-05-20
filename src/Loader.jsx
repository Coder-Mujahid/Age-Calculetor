import React from 'react';
import './App.css'


const Loader = () => {
  const word = 'Age Calculetor';
  return (
    <div className="loader-container">
      <div className="loader">
        {word.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
