import React from 'react';
import '../styles/stars.css';

const Stars = () => {
  const numStars = 100;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const style = {
      left: `${Math.random() * 100}vw`,  
      top: `${Math.random() * 100}vh`,   
      animationDuration: `${Math.random() * 2 + 1}s`, 
      animationDelay: `${Math.random() * 2}s`,   
    };

    stars.push(
      <div key={i} className="star" style={style}></div>
    );
  }

  return( 
  <div className="stars-container">{stars}
    
  </div>
  )
};

export default Stars;
