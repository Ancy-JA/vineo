import Image from 'next/image';
import { IMAGES} from '@/app/constants/imageconstants';
import Heading from '@/components/Atoms/Heading';

export default function LearningSection() {
  return (
    <div className="py-16  flex flex-col md:flex-row items-center justify-center  px-6 md:px-12 lg:px-20 ">
        {/* Left Side - Image and Card */}
        <div className="w-full md:w-1/2  flex flex-col items-center pt-9  transform 2xl:-translate-x-30">
          {/* Image */}
          <Image
            src={IMAGES.learning}
            alt="Wine Learning Image"
            width={600}
            height={750}
            className="rounded-lg  mb-6"
          />

          {/* Card Section */}

        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 max-w-[45rem] lg:w-1/2  text-center md:text-left transform md:translate-x-9 lg:translate-x-13 pr-8">
        <Heading 
        text="Your Learning" 
        size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
        color="text-customGray" 
        align="" // Remove default 'text-center' alignment
        className="mb-10" 
      />
      
      {/* Second heading */}
      <Heading 
        text="Learn about wines with every box" 
        size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
        color="text-customGray" 
        bold // Matches 'font-bold'
        align="" // Remove default alignment
        className="mb-6" 
      />
          <div className="text-xl md:text-2xl lg:text-3xl text-description font-domine mb-12">
            Our goal is to offer you a varied selection of wines, including a wide range of types, flavors, and regions.
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-domine text-description ">
            Each box is an opportunity to explore and discover new experiences in the wonderful world of wine. Learn and enjoy at the same time!
          </div>
        </div>
      </div>
  );
}
