"use client";

import React from 'react';
import LandingCard from 'src/components/LandingPage/LandingCard';
import { IMAGES } from '@/app/constants/imageconstants';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: '1',
      title: 'Vineo IA',
      subTitle: 'Subscription to Vineo AI',
      amount: 5,
      description: [
        'Personalized profile',
        '1 recommendation of 3 wines based on your tastes',
        'Free cancellation anytime',
      ],
      buttonText: 'Start',
      variant: 'vineoIA',
    },
    {
      id: '2',
      title: 'Vineo Box',
      subTitle: 'Monthly box subscription',
      amount: 55,
      description: [
        'Pay month by month, cancel anytime',
        '1 box of 3 wines based on your tastes',
        'Free cancellation anytime',
      ],
      buttonText: 'Start',
      variant: 'vineoBox',
    },
  ];

  return (
    <div
      className="py-16 flex flex-col items-center text-center px-6 md:px-12 lg:px-20 rounded-lg shadow-3xl"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h3 className="text-3xl  font-bold font-domine text-customGray mb-4">
        Choose your plan
      </h3>
      <p className="text-base md:text-lg font-inter text-description mb-8">
        You can change your subscription at any time
      </p>
      <LandingCard items={pricingPlans} />
    </div>
  );
}
