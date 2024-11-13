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


export default function Welcome() {
  return (
    <div className="bg-[#f5f5f5]">

      <HeaderSection />
      <HowItWorksSection />
      <ProcessSection />
      <EssenceOfVineoSection />
      <AlgorithmSection />
      <LearningSection />


      {/* "Level Up" Section */}
      <div className="py-12 bg-[#f5f5f5] flex flex-col items-center text-center">
        <h3 className="text-lg md:text-xl font-semibold text-customGray mb-4">
          Level up with every box
        </h3>
        <p className="text-sm md:text-base text-customGray">
          Invite friends, rate your wines, and access discounts and unique benefits with your Vineo Coins.
        </p>
      </div>

      <VineoCoinsSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />

    </div>
  );
}
