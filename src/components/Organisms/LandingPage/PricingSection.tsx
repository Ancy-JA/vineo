"use client";

import React from "react";
//import CardList from "src/components/CardList";
import { IMAGES } from "@/app/constants/imageconstants";
import LandingCard from "./LandingCard";
import Heading from '@/components/Atoms/Heading';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: "1",
      title: "Vineo IA",
      subTitle: "Subscription to Vineo AI",
      amount: 5,
      description: [
        "Personalized profile",
        "1 recommendation of 3 wines based on your tastes",
        "Free cancellation anytime",
      ],
      buttonText: "Start",
      variant: "vineoIA",
    },
    {
      id: "2",
      title: "Vineo Box",
      subTitle: "Monthly box subscription",
      amount: 55,
      description: [
        "Pay month by month, cancel anytime",
        "1 box of 3 wines based on your tastes",
        "Free cancellation anytime",
      ],
      buttonText: "Start",
      variant: "vineoBox",
    },
  ];

  return (
    <div
      className="py-16 mb-8 pb-15 flex flex-col items-center text-center px-6 md:px-12 lg:px-20 rounded-lg shadow-3xl"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* First heading */}
      <Heading 
        text="Choose the service that best suits you" 
        size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
        color="text-customGray" 
        bold // Matches 'font-bold'
        align="" // Remove default alignment
        className="mt-8 mb-4" 
      />
      
      {/* Second heading */}
      <Heading 
        text="Vineo tailored to you" 
        size="medium" // Matches 'text-xl md:text-2xl lg:text-3xl'
        color="text-description" 
        align="" // Remove default alignment
        className="pb-12 mb-12" 
      />
      <div className="container pb-11 mb-6">
        <LandingCard items={pricingPlans} />
      </div>
    </div>
  );
}
