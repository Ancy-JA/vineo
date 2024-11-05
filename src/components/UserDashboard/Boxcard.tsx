import React from 'react';
import SwiperCarousel from './Swiper';
import RatingStars from './RatingStars';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants'; // Adjust this path if necessary
import type { Box } from '@/components/Types';

interface BoxCardProps {
  box: Box;
}

const BoxCard: React.FC<BoxCardProps> = ({ box }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h4 className="text-xl font-inter text-customGray mb-4">Box from {new Date(box.date).toLocaleDateString()}</h4>
    
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Swiper Carousel for smaller screens */}
      <div className="bg-white shadow-md rounded-lg p-4 flex-1 lg:hidden">
        <SwiperCarousel wines={box.wines} />
      </div>

      {/* Regular Flex Layout for Larger Screens */}
      <div className="bg-white  flex-grow rounded-xl shadow-xl p-4 hidden lg:flex overflow-x-auto space-x-4">
        {box.wines.map((wine, index) => (
          <div key={index} className="flex flex-col items-center w-full lg:w-[calc(33%-1rem)]">
            <img src={wine.image} alt={wine.wine_name} width={150} height={150} className="rounded-lg shadow" />
            <div className="mt-2 text-center">
              <h3 className="text-customPink font-semibold">{wine.wine_name}</h3>
              <p className="text-sm text-customGray">{wine.area}</p>
              <p className="text-sm text-customGray">{wine.store}</p>
              <RatingStars rating={wine.rating} />
            </div>
          </div>
        ))}
      </div>

      {/* Graph Image for Extra Large Screens */}
      <div className="bg-white shadow-xl rounded-lg p-4 lg:w-auto w-full justify-center items-center hidden 2xl:flex min-w-0 max-w-none border-t border-gray-300">
        <Image src={IMAGES.graph} alt="Chart" width={250} height={350} className="max-w-full" />
      </div>
    </div>

    {/* Graph Image for Smaller Screens */}
    <div className="bg-white shadow-xl rounded-lg p-4 lg:w-auto w-full flex justify-center items-center mt-6 2xl:hidden min-w-0 max-w-none border-t border-gray-300">
      <Image src={IMAGES.graph} alt="Chart" width={250} height={350} className="max-w-full" />
    </div>
  </div>
);

export default BoxCard;