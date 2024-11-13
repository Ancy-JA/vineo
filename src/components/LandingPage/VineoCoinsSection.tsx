//import Image from 'next/image';

export default function VineoCoinsSection() {
  return (
    <div className="py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Side - Image Placeholder */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <div className="border-2 border-gray-300 rounded-lg w-60 h-60 flex items-center justify-center">
            {/* Replace this with the actual image when available */}
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-customGray mb-2">
            Your Benefits
          </h3>
          <h4 className="text-lg md:text-xl font-semibold text-customGray mb-4">
            Vineo Coins
          </h4>
          <p className="text-sm md:text-base mb-6">
            Vineo Coins will allow you to access exclusive discounts, premium wines, and unique experiences.
          </p>
          <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-2 px-8 rounded-md shadow-lg">
            Start
          </button>
        </div>
      </div>
  );
}
