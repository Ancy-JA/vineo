import { IMAGES } from '@/app/constants/imageconstants';

export default function VineoCoinsSection() {
  return (
    <div
      className="py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20 relative bg-contain bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${IMAGES.winedroping})`,
      }}
    >
      {/* Left Side - Image Placeholder */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <div className="border-2 flex items-center justify-center">
          
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-domine text-customGray mb-2">
          Your Benefits
        </h3>
        <h4 className="text-lg md:text-xl font-semibold font-domine text-customGray mb-4">
          Vineo Coins
        </h4>
        <p className="text-sm md:text-base font-inter text-description mb-6">
          Vineo Coins will allow you to access exclusive discounts, premium wines, and unique experiences.
        </p>
        <button className="bg-customPink hover:bg-darkPink text-white font-semibold py-2 px-8 rounded-xl shadow-lg">
          Start
        </button>
      </div>
    </div>
  );
}
