import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';

interface LogoProps {
  showProgressBar?: boolean; // Optional prop to show/hide ProgressBar
  progressPercentage?: number; // Progress percentage for the ProgressBar
  paddingBottom?: string; // Optional padding-bottom class
}

const Logo: React.FC<LogoProps> = ({ showProgressBar = false, progressPercentage = 0, paddingBottom = '' }) => (
  <div className={`w-full fixed top-0 left-0 bg-blurgradient shadow-md z-10 ${paddingBottom}`}>
    <div className="max-w-[108rem] mx-auto pt-4">
      {/* Logo Section */}
      <div className="flex items-center pl-4">
        <div className="flex-shrink-0">
          <Image
            src={IMAGES.vineoLogo}
            alt="Vineo Logo"
            width={200}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      {/* ProgressBar Section */}
      {showProgressBar && (
        <div className="w-full mt-4 h-2 bg-gray-200">
          <div
            className="h-full transition-all duration-300 bg-progressbargradient"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
      )}
    </div>
  </div>
);

export default Logo;
