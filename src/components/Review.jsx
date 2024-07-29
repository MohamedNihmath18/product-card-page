import React from 'react';
import './Review.css';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>{review.user}</h4>
      <p>{review.rating}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
