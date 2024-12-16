import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Atoms/Button';
import Heading from '@/components/Atoms/Heading';

export default function AlgorithmSection() {
  return (
    <div className="pt-12 mt-8 md:pt-7 bg-white flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 xl:gap-[7rem] px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <div className="w-full  text-center md:text-left transform md:translate-x-[70px] xl:translate-x-[1rem] order-2 md:order-1">
          <Heading
            text="The Algorithm"
            size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
            color="text-customGray"
            align="" // Remove the default 'text-center' alignment
            className="mb-9"
          />

          {/* Second heading */}
          <Heading
            text="Each time you rate a wine, the algorithm improves"
            size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
            color="text-customGray"
            bold // Matches 'font-semibold'
            align="" // Remove default alignment
            className="max-w-[47rem] mb-8"
          />
          <div className="text-xl md:text-2xl lg:text-3xl md:max-w-[56rem] font-domine text-description mb-8">
            Our algorithm learns from every wine you rate. The more you rate, the more accurate our recommendations become.
          </div>
          <div className="pt-9 text-xl md:text-2xl flex justify-center md:justify-start">
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <Button
                text="Start"
                variant="primary" // Matches the intended styling
                size="large" // Ensures padding and size consistency
                className="bg-customPink hover:bg-darkPink text-white font-domine py-4 px-12 rounded-xl" // Custom styles remain intact
              />
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
