"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HeaderSection() {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <div className="bg-white  w-full shadow-md overflow-hidden">
          {/* Top Section - Logo and Headline */}
          <div className="p-6">
            <Image
              src="/vineo.png" // Update with your actual logo path
              alt="Vineo Logo"
              width={120}
              height={40}
            />
            <h1 className="mt-4 text-3xl md:text-4xl font-domine font-bold text-customGray">
              Discover the perfect wine for you
            </h1>
          </div>

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center"
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

  );
}
