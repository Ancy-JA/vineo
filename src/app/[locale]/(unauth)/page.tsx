'use client';

import React from 'react';
import useLenisScroll from '@/utils/useLenisScroll';
import HeroSection from '@/components/Organisms/LandingPage/HeroSection';
import HowItWorksSection from '@/components/Organisms/LandingPage/HowItWorksSection';
import ProcessSection from '@/components/Organisms/LandingPage/ProcessSection';
import EssenceOfVineoSection from '@/components/Organisms/LandingPage/EssenceOfVineoSection';
import AlgorithmSection from '@/components/Organisms/LandingPage/AlgorithmSection';
import LearningSection from '@/components/Organisms/LandingPage/LearningSection';
import VineoCoinsSection from '@/components/Organisms/LandingPage/VineoCoinsSection';
import PricingSection from '@/components/Organisms/LandingPage/PricingSection';
import FAQSection from '@/components/Organisms/LandingPage/FAQSection';
import NewsletterSection from '@/components/Organisms/LandingPage/NewsLetter';
import Footer from '@/components/Organisms/LandingPage/Footer';
import LevelUpSection from '@/components/Organisms/LandingPage/LevelUpSection';

const Welcome: React.FC = () => {
  const scrollRef = useLenisScroll(); // Use the Lenis hook

  return (
    <div ref={scrollRef} className="bg-white">
      <div className="max-w-[108rem] mx-auto px-4">
        <HeroSection />
        <HowItWorksSection />
        <ProcessSection />
        <EssenceOfVineoSection />
        <AlgorithmSection />
        <LearningSection />
        <LevelUpSection />
        <VineoCoinsSection />
        <PricingSection />
        <FAQSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
