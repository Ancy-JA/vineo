import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js's Image component
import { IMAGES } from '../../../../constants/imageconstants'; // Adjust the path according to your project structure

interface Wine {
  wine_name: string;
  image: string;
  rating: number;
}

interface BoxCardProps {
  title: string;
  wines: Wine[];
}

const BoxCard: React.FC<BoxCardProps> = ({ title, wines }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {wines.map((wine: Wine, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={wine.image} alt={wine.wine_name} width={64} height={64} className="rounded-lg shadow" />
              <div className="mt-2 text-center">
                <h3 className="text-gray-700">{wine.wine_name}</h3>
                <p className="text-sm text-gray-500">{wine.rating} Stars</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center col-span-1">
          <Image src={IMAGES.graph} alt="Chart" width={160} height={160} className="rounded-lg shadow" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          View Box Details
        </button>
      </div>
    </div>
  );
};

export default BoxCard;
