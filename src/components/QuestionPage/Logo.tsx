import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';

const Logo: React.FC = () => (
  <div className="absolute  left-6 max-w-[1728px] w-full">
    <Image
      src={IMAGES.vineoLogo}
      alt="Vineo Logo"
      className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48"
      width={128}
      height={128}
    />
  </div>
);

export default Logo;
