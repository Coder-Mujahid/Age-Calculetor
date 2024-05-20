import React from 'react';
import './App.css'


const Loader = () => {
  const word = 'Age Calculator';
  const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
    'rgb(217, 255, 0)', 'pink', 'purple', 'cyan', 'magenta', 'lime',
    'lightblue', 'coral', 'gold'
  ];

  return (
    <div className="loader-container">
      <div className="loader">
        {word.split('').map((char, index) => (
          <span
            key={index}
            className='text-2xl font-semibold '
            style={{
              animationDelay: `${index * 0.1}s`,
              color: colors[index % colors.length]
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
