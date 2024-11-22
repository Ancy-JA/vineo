"use client";

//import Image from 'next/image';
//import Link from 'next/link';
import HeaderSection from '@/components/LandingPage/HeaderSection';
import HowItWorksSection from '@/components/LandingPage/HowItWorksSection';
import ProcessSection from '@/components/LandingPage/ProcessSection';
import EssenceOfVineoSection from '@/components/LandingPage/EssenceOfVineoSection';
import AlgorithmSection from '@/components/LandingPage/AlgorithmSection';
import LearningSection from '@/components/LandingPage/LearningSection';
import VineoCoinsSection from '@/components/LandingPage/VineoCoinsSection';
import PricingSection from '@/components/LandingPage/PricingSection';
import FAQSection from '@/components/LandingPage/FAQSection'
import NewsletterSection from '@/components/LandingPage/NewsLetter';
import Footer from '@/components/LandingPage/Footer';
import LevelUpSection from '@/components/LevelUpSection';


export default function Welcome() {
  return (
    <div className="bg-white">
      <div className="max-w-[108rem] mx-auto px-4">
        <HeaderSection />
      </div>
      <div className="max-w-[108rem] mx-auto px-4">
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
}

  

