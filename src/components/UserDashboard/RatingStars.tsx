// RatingStars.tsx
import React from 'react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => (
  <div>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-customPink" : "text-customGray"}>★</span>
    ))}
  </div>
);

export default RatingStars;
