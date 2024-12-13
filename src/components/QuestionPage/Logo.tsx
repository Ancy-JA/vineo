import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';

const Logo: React.FC = () => (
  <div className="w-full fixed top-0 left-0 bg-blurgradient shadow-md z-10">
          <div className="max-w-[108rem] mx-auto flex items-center p-4">
            <Image
              src={IMAGES.vineoLogo}
              alt="Vineo Logo"
              width={200}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
);

export default Logo;
