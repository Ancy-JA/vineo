import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';
import Button from '../../Atoms/Button';
import Heading from '../../Atoms/Heading';

export default function ProcessSection() {
  return (
    <div className="pt-12 pb-[2rem] sm:pb-[5rem] md:pb-[9rem] bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-10">
        {/* Image Section */}
        <div className="flex justify-center md:mb-14 md:pb-14 transform md:-translate-x-10">
          <Image
            src={IMAGES.gif1}
            alt="Wine Selection Process"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-3 xsm:mb-14 transform md:translate-x-18 lg:translate-x-14">
          <Heading
            text="The Process"
            size="xlarge"
            bold={false}
            align="left"
            className="mt-12 mb-10"
          />

          <Heading
            text="How do we find the perfect wines for you?"
            size="xlarge"
            bold
            align="left"
          />

          <div className="text-customGray text-2xl md:text-3xl font-domine mt-11">
            We analyze your wine preferences based on 18 key aspects.
          </div>
          <div className="text-customGray text-2xl md:text-3xl font-domine mt-7">
            Then, our algorithm determines the probability that you will enjoy each bottle 
            we include in your box.
          </div>
          <div className="text-customGray text-2xl md:text-3xl font-domine mt-9">
            This value is used to carefully select the wine bottles that we include  in your
            box.
          </div>

          <div className="mt-9 md:mt-6 flex justify-center md:justify-start">
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <Button
                text="Start Now"
                variant="primary"
                size="large"
                className="bg-customPink hover:bg-darkPink text-white py-4 text-lg md:text-2xl rounded-xl shadow-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
