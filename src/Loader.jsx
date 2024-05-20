import React from 'react';
import './App.css'


const Loader = () => {
  const word = 'Age Calculator';

  return (
    <div className="loader-container">
      <div className="loader">
        {word.split('').map((char, index) => (
          <span
            key={index}
            className='text-2xl uppercase font-semibold'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;

