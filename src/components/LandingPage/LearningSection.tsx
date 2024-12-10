import Image from 'next/image';
import { IMAGES} from '@/app/constants/imageconstants';

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
        <div className="w-full md:w-1/2 lg:w-1/2  text-center md:text-left transform md:translate-x-9 lg:translate-x-20 pr-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-domine text-customGray mb-6">
            Your Learning
          </h3>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold font-domine text-customGray mb-6">
            Learn about wines with every box
          </h4>
          <p className="text-lg md:text-xl lg:text-2xl text-description font-domine mb-12">
            Our goal is to offer you a varied selection of wines, including a wide range of types, flavors, and regions.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-domine text-description ">
            Each box is an opportunity to explore and discover new experiences in the wonderful world of wine. Learn and enjoy at the same time!
          </p>
        </div>
      </div>
  );
}
