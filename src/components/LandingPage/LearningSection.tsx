import Image from 'next/image';

export default function LearningSection() {
  return (
    <div className="py-16 bg-[#f5f5f5] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Side - Image and Card */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          {/* Image */}
          <Image
            src="/assets/images/landingimage1.svg"
            alt="Wine Learning Image"
            width={300}
            height={450}
            className="rounded-lg shadow-md mb-6"
          />

          {/* Card Section */}

        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
            Your Learning
          </h3>
          <h4 className="text-lg md:text-xl font-semibold text-customGray mb-4">
            Learn about wines with every box
          </h4>
          <p className="text-sm md:text-base mb-4">
            Our goal is to offer you a varied selection of wines, including a wide range of types, flavors, and regions.
          </p>
          <p className="text-sm md:text-base">
            Each box is an opportunity to explore and discover new experiences in the wonderful world of wine. Learn and enjoy at the same time!
          </p>
        </div>
      </div>
  );
}
