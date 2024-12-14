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
      <div className="text-3xl md:text-4xl font-domine font-bold text-customGray ">Level up with every box</div>
      <div className="mt-7 mb-14 text-xl md:text-2xl lg:text-3xl text-description max-w-[30rem] md:max-w-[60rem]">
        Invite friends, rate your wines, and access discounts and unique benefits with your Vineo Coins.
      </div>
    </div>
  );
};

export default LevelUpSection;
