import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // Fill the stars based on the rating value
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  return <div className='stars'>Rating: {stars}</div>;
};

export default StarRating;
