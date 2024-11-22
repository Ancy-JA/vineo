import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';


export default function EssenceOfVineoSection() {
  return (
    <div className="pt-10 mt-10 flex flex-col items-center justify-center bg-bgshade relative overflow-visible">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:mt-[-150px] md:mr-[-150px]">
          <Image
            src={IMAGES.winepack}
            alt="Vineo Wine Box"
            width={600}
            height={900}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left transform md:translate-x-[100px]"> {/* Added translate-x */}
          <h3 className="text-xl md:text-2xl font-domine font-bold text-customGray mb-6">
            The Essence of Vineo
          </h3>
          <p className="text-sm text-description font-inter md:text-base mb-4">
            Receive a box with 3 wines: 2 carefully selected based on your preferences, <br/>
            and 1 that will surprise you with new flavors and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

