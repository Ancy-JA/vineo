import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';
import Link from 'next/link';

export default function AlgorithmSection() {
  return (
    <div className="pt-4 bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 xl:gap-[7rem] px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left transform md:translate-x-[70px] xl:translate-x-[70px]">
          <h3 className="text-xl md:text-2xl font-domine text-customGray mb-4">
            The Algorithm
          </h3>
          <h4 className="text-lg md:text-2xl font-domine font-semibold text-customGray mb-4">
            Each time you rate a wine, the algorithm improves
          </h4>
          <p className="text-sm md:text-base font-inter text-description mb-4">
            Our algorithm learns from every wine you rate.<br/> The more you rate, the more accurate our recommendations become.
          </p>
          <div className="pt-5">
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <button className="bg-customPink hover:bg-darkPink text-white font-inter py-3 px-8 rounded-xl">
                Start
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center transform md:translate-x-[10px] xl:translate-x-[60px]">
          <Image
            src={IMAGES.graphdetails} // Update with the correct image path
            alt="Algorithm UI"
            width={300}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
