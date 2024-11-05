import React from 'react';
import Image from 'next/image';
import RatingStars from './RatingStars';
import type { Wine } from '../Types';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => (
  <div className="flex flex-col items-center">
    <Image src={wine.image} alt={wine.wine_name} width={150} height={150} className="rounded-lg shadow" />
    <div className="mt-2 text-center">
      <h3 className="text-customPink font-semibold">{wine.wine_name}</h3>
      <p className="text-customGray">{wine.area}</p>
      <p className="text-customGray">{wine.store}</p>
      <RatingStars rating={wine.rating} />
    </div>
  </div>
);

export default WineCard;
