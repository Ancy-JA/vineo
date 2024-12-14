"use client";

import Navbar from './Navigationbar'; // Import the Navbar component
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';

export default function Header() {
  return (
    <div className="relative">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Header Content */}
      <div className="pt-[2rem] xsm:pt-[5rem] flex items-center justify-center">
        <div className="bg-white w-full pt-2 shadow-md overflow-hidden">
          {/* Text Above the Background Image */}
          <div className="text-2xl xsm:text-4xl lg:text-5xl font-bold font-domine text-customGray text-left pl-3 md:pl-5 lg:pl-14 pt-7 xsm:pt-1 sm:pt-7 md:pt-14">
            Discover the perfect wine for you
          </div>

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative h-[12rem] xsm:h-[17rem] md:h-[25rem] lg:h-[30rem] 2xl:h-[50rem] bg-cover bg-no-repeat md:bg-right-top"
            style={{ backgroundImage: `url(${IMAGES.LandingImg})` }}
          >
            {/* Overlay Content */}
            <div className="absolute text-sm xsm:text-xl md:text-2xl xl:text-3xl mt-3 md:mt-3 lg:mt-9 leading-snug xsm:leading-tight text-customGray inset-0 flex flex-col font-domine items-start pl-3 lg:pl-14 md:pl-5 lg-items-center bg-opacity-20 max-w-[16rem]  xsm:max-w-[20rem]  md:max-w-[19rem] lg:max-w-[23rem] xl:max-w-[30rem]">
              <div>
                Join Vineo to match with wines that
                fit your taste thanks to our                
                personalized recommendations.
              </div>
              <div className="mt-1 md:mt-2 lg:mt-7 xl:mt-10">Be surprised with new flavors and</div>
              <div>unforgettable experiences.</div>
              <Link href="/sign-in" >
                <button
                  type="button"
                  className="bg-customPink border-darkPink hover:bg-darkPink text-white font-domine mt-2 lg:mt-3 xl:mt-4 2xl:mt-9 py-2 px-12 md:py-2.5 lg:py-4 rounded-xl shadow-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
