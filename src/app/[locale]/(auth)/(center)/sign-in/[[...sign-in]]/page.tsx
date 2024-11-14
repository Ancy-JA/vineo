'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LoginForm from '@/components/SignIn/LoginForm';
import { IMAGES } from '@/app/constants/imageconstants';

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 font-inter">
      <div className="absolute left-6 top-6">
        <Image src={IMAGES.vineoLogo} alt="Vineo Logo" width={100} height={100} />
      </div>
      {/* Background Image Container */}
      <div className="absolute bottom-0 left-0 right-20 top-24 bg-glass-bottle bg-39rem bg-no-repeat md:bg-center lg:bg-left">
       
      </div>
      <div className="relative bottom-40 top-0 z-10 w-full max-w-lg rounded-lg px-6 py-4 font-inter shadow-2xl lg:left-40">
        <Typography variant="h4" className="mb-6 text-center font-inter !font-bold !text-2xl text-[#303E63]">
          {t('signIn.welcomeTitle')}
        </Typography>
        <Typography variant="h6" className="mb-6 text-center !text-xl font-inter text-[#394A59]">
          {t('signIn.loginTitle')}
        </Typography>
        <LoginForm />
      </div>
    </div>
  );
}
