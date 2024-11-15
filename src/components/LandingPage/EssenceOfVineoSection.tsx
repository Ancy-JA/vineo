import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';


export default function EssenceOfVineoSection() {
  return (
    <div className="pt-10 mt-10 flex flex-col items-center justify-center bg-bgshade relative overflow-visible">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
        {/* Image Section (Positioned Half In, Half Out) */}
        <div className="relative w-full md:w-1/2 flex justify-center md:mt-[-150px]">
          <Image
            src={IMAGES.winepack}
            alt="Vineo Wine Box"
            width={600}
            height={900}
           
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-[-100px]">
          <h3 className="text-xl md:text-2xl font-domine font-bold text-customGray mb-6">
            The Essence of Vineo
          </h3>
          <p className="text-sm  text-description font-inter md:text-base mb-4">
            Receive a box with 3 wines: 2 carefully selected based on your preferences, and 1 that will surprise you with new flavors and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
