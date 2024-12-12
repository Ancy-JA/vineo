import React from 'react';

import { IMAGES } from '@/app/constants/imageconstants';

const LevelUpSection: React.FC = () => {
  return (
    <div
      className="py-12 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat  "
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
      }}
    >
      <div className="text-2xl md:text-3xl font-bold text-customGray ">Level up with every box</div>
      <div className="mt-4 mb-14 text-lg md:text-xl lg:text-2xl text-description max-w-[30rem] md:max-w-[45rem]">
        Invite friends, rate your wines, and access discounts and unique benefits with your Vineo Coins.
      </div>
    </div>
  );
};

export default LevelUpSection;
