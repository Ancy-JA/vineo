"use client";

import React from 'react';
import CardList from 'src/components/CardList';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: '1',
      title: 'Basic Plan',
      subTitle: 'Ideal for beginners',
      amount: 90,
      description: [
        ' Cancel anytime',
        ' Personalized profile',
        ' 1 box of 3 wines based on your tastes',
        ' Free cancellation anytime',
      ],
      buttonText: 'Start',
    },
    {
      id: '2',
      title: 'Premium Plan',
      subTitle: 'Most popular choice',
      amount: 200,
      description: [
        ' Personalized profile',
        ' 1 box of 3 wines based on your tastes',
        ' Free cancellation anytime',
      ],
      buttonText: 'Choose Plan',
      isCurrent: true,
    },
    {
      id: '3',
      title: 'Pro Plan',
      subTitle: 'For wine enthusiasts',
      amount: 590,
      description: [
        ' Cancel anytime',
        ' Personalized profile',
        ' 1 box of 3 wines based on your tastes',
        ' Free cancellation anytime',
      ],
      buttonText: 'Start',
    },
  ];

  return (
    <div className="py-16 bg-[#f5f5f5] flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
      <h3 className="text-2xl md:text-3xl font-bold text-customGray mb-4">
        Choose the price that best suits you
      </h3>
      <p className="text-sm md:text-base text-customGray mb-8">
        You can change your subscription at any time
      </p>

      <CardList items={pricingPlans} />
    </div>
  );
}
