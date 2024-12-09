'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

import LoginForm from '@/components/SignIn/LoginForm';
import { IMAGES } from '@/app/constants/imageconstants';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 font-inter overflow-x-hidden">
      <div className="absolute left-6 top-6">
        <Image
          src={IMAGES.vineoLogo}
          alt="Vineo Logo"
          className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-42"
          width={128}
          height={128}
        />
      </div>
      {/* Background Image Container */}
      <div
        className="absolute bottom-0 left-0 right-0 top-10 bg-glass-bottle bg-no-repeat 
         bg-center lg:bg-left 
         bg-custom-sm md:bg-custom-md lg:bg-custom-lg xl:bg-custom-xl"
      ></div>

      <div className="relative m-5 h-[47rem] z-10 w-full max-w-3xl rounded-2xl box-border md:pr-[8rem] md:pl-[8rem] p-4 pt-[4rem] font-inter shadow-all-sides-2xl lg:left-40">
        <Typography
          variant="h4"
          className="mb-3 text-center font-inter !font-bold text-2xl md:text-3xl text-[#303E63]"
        >
          Welcome to Vineo
        </Typography>
        <Typography
          variant="h6"
          className="pt-8 text-center text-xl md:text-2xl font-inter text-[#394A59]"
        >
          Login
        </Typography>
        <LoginForm />
      </div>
    </div>

  );
}
