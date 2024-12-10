'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

import LoginForm from '@/components/SignIn/LoginForm';
import { IMAGES } from '@/app/constants/imageconstants';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center font-inter overflow-hidden bg-login-gradient">
      {/* Logo */}
      <div className="absolute left-6 top-6">
        <Image
          src={IMAGES.vineoLogo}
          alt="Vineo Logo"
          className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-42"
          width={128}
          height={128}
        />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-glass-bottle bg-no-repeat bg-center lg:bg-left bg-custom-sm md:bg-custom-md lg:bg-custom-lg xl:bg-custom-xl translate-y-[6rem]"
      ></div>

      {/* Login Form Container */}
      <div className="relative h-auto z-10 w-full max-w-3xl rounded-2xl box-border p-10 pt-8 md:pr-[8rem] md:pl-[8rem] font-inter shadow-all-sides-2xl lg:left-40">
        <Typography
          variant="h4"
          className="mb-3 text-center font-inter !font-bold text-2xl md:text-3xl text-[#303E63]"
        >
          Welcome to Vineo
        </Typography>
        <Typography
          variant="h6"
          className="pt-6 text-center text-xl md:text-2xl font-inter text-[#394A59]"
        >
          Login
        </Typography>
        <LoginForm />
      </div>
    </div>
  );
}
