import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';

export default function ProcessSection() {
  return (
    <div className="pt-12  pb-[2rem] sm:pb-[5rem] md:pb-[9rem] bg-white flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-10">
        {/* Image Section */}
        <div className="flex justify-center md:mb-14 md:pb-14 transform  md:-translate-x-10">
          <Image
            src={IMAGES.gif1}
            alt="Wine Selection Process"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left mb-3 xsm:mb-14 transform md:translate-x-14">
          <div className="text-4xl md:text-5xl text-customGray font-domine mt-12 mb-10">The Process</div>
          <div className="text-4xl md:text-5xl text-customGray font-domine font-semibold">
            How do we find the perfect wines for you?
          </div>

          <div className="text-customGray text-2xl md:text-3xl font-domine mt-7">
            We analyze your wine preferences based on  18 key aspects.
          </div>
          <div className="text-customGray text-2xl md:text-3xl font-domine mt-7">
            Then, our algorithm determines the probability that  you will enjoy each bottle  <br />we include in your box.
          </div>
          <div className="text-customGray text-2xl md:text-3xl font-domine mt-9">
            This value is used to carefully select  the wine bottles that we include <br /> in your box.
          </div>

          <div className="mt-9 md:mt-5 text-2xl md:text-3xl">
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <button className="bg-customPink hover:darkPink text-white py-4 px-11 rounded-xl shadow-lg">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
