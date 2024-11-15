import React from 'react';
import Heading from './Heading';
import Text from './Text';
import { IMAGES } from '@/app/constants/imageconstants';

const LevelUpSection: React.FC = () => {
  return (
    <div
      className="py-12 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
      }}
    >
      <Heading title="Level up with every box" />
      <Text content="Invite friends, rate your wines, and access discounts and unique benefits with your Vineo Coins." />
    </div>
  );
};

export default LevelUpSection;
