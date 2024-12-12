import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';

export default function EssenceOfVineoSection() {
  return (
    <div className="pt-12 mt-12 flex flex-col shadow-two-sides-xl items-center justify-center bg-bgshade relative overflow-visible ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center ">
          <div className=" mb-5 relative ml-7 -mt-[7.3rem] xsm:-mt-[9.3rem] sm:-mt-[14.25rem] md:-mt-[25.125rem] lg:-mt-[21.125rem] md:-mr-[210px] lg:-mr-[210px] md:pt-9">
            <Image
              src={IMAGES.winepack}
              alt="Vineo Wine Box"
              width={970}
              height={900}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center  md:text-left py-6 md:py-10 -translate-y-20">
          <div className="text-2xl md:text-3xl text-center font-domine font-bold text-customGray mb-10">
            The Essence of Vineo
          </div>
          <div className="text-xl md:text-2xl text-description font-domine ">
            Receive a box with 3 wines: 2 carefully selected based on your preferences, <br />
            and 1 that will surprise you with new flavors and experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
