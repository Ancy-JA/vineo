"use client";

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function HeaderSection() {
  return (
    <div className="relative">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-opacity-80 bg-gray-900 backdrop-blur-lg z-50 shadow-md">
        <div className="flex items-center justify-between p-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/vineo.png" // Update with your actual logo path
              alt="Vineo Logo"
              width={120}
              height={40}
            />
          </div>

          {/* Button Section */}
          <div className="flex items-center space-x-4">
            <Link href="/gift">
              <p className="text-customPink font-semibold cursor-pointer">
                Give Vineo as a gift
              </p>
            </Link>
            <button
              type="button"
              className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-2 px-4 rounded-md"
            >
              Begin
            </button>
            <button
              type="button"
              className="border border-customPink text-customPink font-semibold py-2 px-4 rounded-md"
            >
              Access
            </button>
            <Link href="https://wa.me">
            <AiOutlineWhatsApp />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="pt-[80px] flex min-h-screen items-center justify-center">
        <div className="bg-white w-full pt-2 shadow-md overflow-hidden">
          {/* Top Section - Logo and Headline */}
          

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] bg-cover bg-center"
            style={{ backgroundImage: "url('/banner.png')" }} // Update with your image path
          >
            {/* Overlay Content */}
            <div className="absolute text-customGray inset-0 flex flex-col font-domine font-semibold items-start pl-6 bg-white bg-opacity-20 rounded-b-lg">
              <p className="font-semibold text-base md:text-lg">
                Join Vineo to match with wines that
              </p>
              <p>fit your taste thanks to our</p>
              <p>personalized recommendations.</p>
              <p className="mt-5">
                Be surprised with new flavors and
              </p>
              <p>unforgettable experiences.</p>
              <Link href="/[locale]/unauth/sign-in" as="/sign-in">
                <button
                  type="button"
                  className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold mt-6 py-2 px-6 rounded-md shadow-lg"
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
