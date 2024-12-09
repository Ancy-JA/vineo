import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';
import Link from 'next/link';

export default function AlgorithmSection() {
  return (
    <div className="pt-12 mt-8 md:pt-7 bg-white flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 xl:gap-[7rem] px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 xl:w-full text-center md:text-left transform md:translate-x-[70px] xl:-translate-x-[26px] order-2 md:order-1">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-domine text-customGray mb-6">
            The Algorithm
          </h3>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-domine font-semibold text-customGray mb-8">
            Each time you rate a wine, the algorithm improves
          </h4>
          <p className="text-lg md:text-xl lg:text-2xl font-inter text-description mb-4">
            Our algorithm learns from every wine you rate.<br/> The more you rate, the more accurate our recommendations become.
          </p>
          <div className="pt-9 text-xl md:text-2xl">
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <button className="bg-customPink hover:bg-darkPink text-white font-inter py-4 px-12 rounded-xl">
                Start
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center transform md:translate-x-[10px] xl:-translate-x-[10px] order-1 md:order-2 md:mt-12">
          <Image
            src={IMAGES.winegif}// Update with the correct image path
            alt="Algorithm UI"
            width={360}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
