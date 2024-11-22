"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSection() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-opacity-20 bg-gray-500 backdrop-blur-lg z-50 shadow-md">
        <div className="max-w-[108rem] mx-auto px-4 flex items-center justify-between p-2 md:p-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={IMAGES.vineoLogo}
              alt="Vineo Logo"
              width={120}
              height={40}
              className="w-[100px] h-[30px] md:w-[120px] md:h-[40px]"
            />
          </div>

          {/* Button Section for md and above */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            <Link href="/gift">
              <p className="text-customPink font-semibold cursor-pointer">
                Give Vineo as a gift
              </p>
            </Link>
            <button
              type="button"
              className="bg-customPink hover:bg-darkPink text-white font-semibold py-0 md:py-2 px-4 rounded-md"
              onClick={() => router.push('./Questions')}
            >
              Begin
            </button>
            <button
              type="button"
              className="border border-customPink text-customPink font-semibold py-0 md:py-2 px-4 rounded-md"
            >
              Access
            </button>
            <Link href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <Image src={IMAGES.WhatsApp} alt="WhatsApp Icon" width={24} height={24} />
            </Link>
          </div>

          {/* More Button for small screens */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-2xl text-customPink font-semibold py-2 px-4 rounded-full"
              onClick={toggleDropdown}
            >
              &#x2026; {/* Three dots (ellipsis) */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md z-50">
                <Link href="/gift">
                  <p className="text-customPink font-semibold p-2 cursor-pointer hover:bg-darkPink">
                    Gift
                  </p>
                </Link>
                <button
                  type="button"
                  className="w-full text-left bg-customPink hover:bg-darkPink text-white font-semibold py-2 px-4 rounded-md"
                  onClick={() => {
                    router.push('./Questions');
                    setIsDropdownOpen(false);
                  }}
                >
                  Begin
                </button>
                <button
                  type="button"
                  className="w-full text-left border border-customPink text-customPink font-semibold py-2 px-4 rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Access
                </button>
                <Link href="https://wa.me" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center p-2 hover:bg-gray-100">
                    <Image src={IMAGES.WhatsApp} alt="WhatsApp Icon" width={24} height={24} />
                    <span className="ml-2 text-customPink font-semibold"></span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="pt-[5rem] flex items-center justify-center">
        <div className="bg-white w-full pt-2 shadow-md overflow-hidden">
          {/* Text Above the Background Image */}
          <h2 className="text-2xl md:text-3xl font-bold font-domine text-customGray mb-2 text-left pl-6 pt-8">
            Discover the perfect wine for you
          </h2>

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative h-[20rem] md:h-[25rem] lg:h-[35rem] bg-cover bg-no-repeat bg-right-top"
            style={{ backgroundImage: `url(${IMAGES.LandingImg})` }}
          >
            {/* Overlay Content */}
            <div className="absolute mt-0 md:mt-6 text-customGray inset-0 flex flex-col font-inter items-start pl-6 lg-items-center bg-opacity-20">
              <p>Join Vineo to match with wines that<br />
                fit your taste thanks to our<br />
                personalized recommendations.</p>
              <p className="mt-5">Be surprised with new flavors and</p>
              <p>unforgettable experiences.</p>
              <Link href="/sign-in" className='mt-6'>
                <button
                  type="button"
                  className="bg-customPink border-darkPink hover:bg-darkPink text-white font-inter mt-6 py-2 px-6 rounded-xl shadow-lg"
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
