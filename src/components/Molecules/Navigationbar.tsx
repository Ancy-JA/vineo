"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/Atoms/Button';
import Icon from '@/components/Atoms/Icon';

export default function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-20 bg-blurgradient z-50 shadow-md">
      <div className=" md:w-[108rem] max-w-full mx-auto px-4 flex items-center justify-between p-2 md:p-4">
        {/* Logo Section */}
        <div className="flex items-center pl-5 ">
          <Image
            src={IMAGES.vineoLogo}
            alt="Vineo Logo"
            width={190}
            height={40}
          />
        </div>

        {/* Button Section for md and above */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4 xsm:text-2xl text-lg">
          <Link href="/gift">
            <div className="text-customPink font-semibold cursor-pointer sm:pl-3">
              Give Vineo as a gift
            </div>
          </Link>
          <Button
            text="Begin"
            variant="primary"
            size="large"
            className="font-semibold py-0 md:py-3 px-10 rounded-xl"
            onClick={() => router.push('./Questions')}
          />
          <Button
            text="Access"
            variant="outline"
            size="large"
            className="font-semibold py-0 md:py-3 px-10 rounded-xl"
          />
          <Link href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <Image src={IMAGES.WhatsApp} alt="WhatsApp Icon" width={40} height={40} />
          </Link>
        </div>


        {/* More Button for small screens */}
        <div className="md:hidden">
          <Button
            text="..."
            variant="transparent"
            size="medium"
            className="text-xl font-semibold py-2 px-4 rounded-full"
            onClick={toggleDropdown}
          />


          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute text-lg right-1 mt-2 w-35 p-3  bg-paperbg shadow-lg rounded-md z-50">
              {/* Gift Link */}
              <Link href="/gift">
                <p className="text-customPink font-semibold p-2 cursor-pointer hover:bg-darkPink">
                  Gift
                </p>
              </Link>

              {/* Begin Button */}
              <Button
                text="Begin"
                variant="primary"
                size="medium"
                className="w-full text-left py-2 px-4 rounded-md mb-2"
                onClick={() => {
                  router.push('./Questions');
                  setIsDropdownOpen(false);
                }}
              />

              {/* Access Button */}
              <Button
                text="Access"
                variant="outline"
                size="medium"
                className="w-full text-left py-2 px-4 rounded-md"
                onClick={() => setIsDropdownOpen(false)}
              />

              {/* WhatsApp Link */}
              <Icon
  href="https://wa.me"
  src={IMAGES.WhatsApp}
  alt="WhatsApp Icon"
  className="pl-9 p-2"
/>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}