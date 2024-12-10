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
      <div className=" pt-[2rem] xsm:pt-[5rem] flex items-center justify-center ">
        <div className="bg-white w-full pt-2 shadow-md overflow-hidden">
          {/* Text Above the Background Image */}
          <h2 className=" text-xl xsm:text-3xl lg:text-4xl font-bold font-domine text-customGray  text-left pl-3 md:pl-5 lg:pl-14 pt-7 xsm:pt-1 sm:pt-7 md:pt-14">
            Discover the perfect wine for you
          </h2>

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative h-[12rem] xsm:h-[17rem] md:h-[25rem] lg:h-[30rem] 2xl:h-[50rem]  bg-cover bg-no-repeat  md:bg-right-top"
            style={{ backgroundImage: `url(${IMAGES.LandingImg})`}}
          >
            {/* Overlay Content */}
            <div className="absolute text-sm xsm:text-xl md:text-2xl mt-0 md:mt-3 lg:mt-9 leading-[2.28rem] text-customGray inset-0 flex flex-col font-domine items-start pl-3 lg:pl-14 md:pl-5 lg-items-center bg-opacity-20 max-w-[20rem], xsm:max-w-[30rem] md:max-w-[19rem] lg:max-w-[30rem]">
              <p>
                Join Vineo to match with wines that
                <br />
                fit your taste thanks to our
                <br />
                personalized recommendations.
              </p>
              <p className=" mt-0 xsm:mt-2 md:mt-0 lg:mt-10">Be surprised with new flavors and</p>
              <p>unforgettable experiences.</p>
              <Link href="/sign-in" className="mt-3 xsm:mt-6   md:mt-3 lg:mt-6">
                <button
                  type="button"
                  className="bg-customPink border-darkPink hover:bg-darkPink text-white font-domine mt-0 lg:mt-9 py-4 px-12 rounded-xl shadow-lg"
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
