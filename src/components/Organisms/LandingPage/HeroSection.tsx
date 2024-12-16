"use client";

import Navbar from '../../Molecules/Navigationbar'; // Import the Navbar component
import Link from 'next/link';
//import { IMAGES } from '@/app/constants/imageconstants';
import Button from '@/components/Atoms/Button';
import Heading from '@/components/Atoms/Heading';

export default function Header() {
  return (
    <div className="relative">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Header Content */}
      <div className="pt-[3rem] xsm:pt-[5rem] flex items-center justify-center">
        <div className="bg-white w-full pt-2 shadow-md overflow-hidden">
          {/* Text Above the Background Image */}
          <Heading
            text="Discover the perfect wine for you"
            size="xlarge"
            bold
            align="left"
            className="pl-3 md:pl-5 lg:pl-14 pt-7 xsm:pt-1 sm:pt-7 md:pt-14"
          />


          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative h-[12rem] xsm:h-[17rem] md:h-[25rem] lg:h-[30rem] 2xl:h-[50rem] bg-LandingImg bg-cover bg-no-repeat md:bg-right-top"
            
          >
            {/* Overlay Content */}
            <div className="absolute text-sm xsm:text-lg md:text-2xl xl:text-3xl mt-3 md:mt-3 lg:mt-9 leading-snug xsm:leading-tight text-customGray inset-0 flex flex-col font-domine items-start pl-3 lg:pl-14 md:pl-5 lg-items-center bg-opacity-20 max-w-[16rem]  xsm:max-w-[20rem]  md:max-w-[19rem] lg:max-w-[23rem] xl:max-w-[30rem]">
              <div>
                Join Vineo to match with wines that
                fit your taste thanks to our
                personalized recommendations.
              </div>
              <div className="mt-1 md:mt-2 lg:mt-7 xl:mt-10">Be surprised with new flavors and</div>
              <div>unforgettable experiences.</div>
              <Link href="/sign-in">
                <Button
                  text="Get Started"
                  variant="primary"
                  size="large"
                  className="bg-customPink border-darkPink hover:bg-darkPink text-white font-domine mt-2  lg:mt-3 xl:mt-4 2xl:mt-9 py-2  md:py-2 lg:py-4 rounded-xl shadow-lg text-sm xsm:text-xl md:text-2xl xl:text-2xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
