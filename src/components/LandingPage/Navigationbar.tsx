"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-20 bg-gray-500 backdrop-blur-lg z-50 shadow-md">
      <div className="w-[108rem] max-w-full mx-auto px-4 flex items-center justify-between p-2 md:p-4">
        {/* Logo Section */}
        <div className="flex items-center pl-5 ">
          <Image
            src={IMAGES.vineoLogo}
            alt="Vineo Logo"
            width={100}
            height={30}
          />
        </div>

        {/* Button Section for md and above */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4 xsm:text-xl text-sm">
          <Link href="/gift">
            <p className="text-customPink font-semibold cursor-pointer">
              Give Vineo as a gift
            </p>
          </Link>
          <button
            type="button"
            className="bg-customPink hover:bg-darkPink text-white font-semibold py-0 md:py-3 px-10 rounded-xl"
            onClick={() => router.push('./Questions')}
          >
            Begin
          </button>
          <button
            type="button"
            className="border border-customPink text-customPink font-semibold py-0 md:py-3 px-10 rounded-xl"
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
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}