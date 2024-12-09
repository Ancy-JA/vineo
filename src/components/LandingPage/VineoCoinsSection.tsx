import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function VineoCoinsSection() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768); // `md` breakpoint is 768px
    };

    checkScreenSize(); // Set initial value
    window.addEventListener('resize', checkScreenSize); // Add event listener on resize
    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup listener
  }, []);

  return (
    <div
      className={`py-16 bg-white   md:h-[25rem] lg:h-[30rem] 2xl:h-[50rem] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20 relative bg-no-repeat bg-right ${
        isMdScreen ? 'bg-contain' : ''
      }`}
      style={{
        backgroundImage: isMdScreen ? `url(${IMAGES.winedroping})` : 'none', // Conditionally apply background image
      }}
    >
      {/* Left Side - Image Placeholder */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <div className="shadow-all-sides-2xl flex items-center border-black rounded-2xl justify-center transform lg:-translate-x-10">
          <Image
            src={IMAGES.gif2} // Ensure this resolves to a valid URL string
            alt="vineo coins"
            width={400} 
            height={400} 
            className="rounded-lg"
            unoptimized // This is required to preserve GIF animations
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2  ml-5 text-center md:text-left transform md:translate-x-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-domine text-customGray mb-3">
          Your Benefits
        </h3>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold font-domine text-customGray mb-6">
          Vineo Coins
        </h4>
        <p className="text-lg md:text-xl lg:text-2xl font-inter text-description mb-14">
          Vineo Coins will allow you to access exclusive discounts, premium wines, and unique experiences.
        </p>
        <button className="bg-customPink hover:bg-darkPink text-white text-xl md:text-2xl font-semibold py-4 px-11 rounded-xl shadow-lg">
          Start
        </button>
      </div>
    </div>
  );
}
