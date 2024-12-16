import React from 'react';

import { IMAGES } from '@/app/constants/imageconstants';
import Heading from '@/components/Atoms/Heading';

const LevelUpSection: React.FC = () => {
  return (
    <div
      className="py-12 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat  "
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
      }}
    >
      {/* Heading for "Level up with every box" */}
      <Heading 
        text="Level up with every box" 
        size="medium" // Slightly smaller if this matches the size requirement
        color="text-customGray" 
        bold // Matches 'font-bold'
        align="" // Remove default alignment if needed
        className="md:text-4xl" // Custom override for medium screens
      />
      <div className="mt-7 mb-14 text-xl md:text-2xl lg:text-3xl text-description max-w-[30rem] md:max-w-[60rem]">
        Invite friends, rate your wines, and access discounts and unique benefits with your Vineo Coins.
      </div>
    </div>
  );
};

export default LevelUpSection;
