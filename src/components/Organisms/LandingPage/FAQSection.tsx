import { useState } from 'react';
import Heading from '@/components/Atoms/Heading';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time without any additional charges. We offer flexible options to manage your subscription as per your needs.",
    },
    {
      question: "When will the box arrive at my home?",
      answer: "Your box will typically arrive within 3-5 business days after your order is processed.",
    },
    {
      question: "How do you select the wines for the box?",
      answer: "Our team of sommeliers carefully selects each wine based on your preferences and tasting history.",
    },
    {
      question: "Does the system learn from my tastes?",
      answer: "Yes, our system adapts and learns from the ratings you give to provide better recommendations over time.",
    },
    {
      question: "What is meant by two wines I may like and one that will surprise me?",
      answer: "We select two wines based on your taste profile, and one is a surprise wine meant to introduce you to new flavors and experiences.",
    },
    {
      question: "Can I gift Vineo to a friend or family member?",
      answer: "Yes, you can easily gift a Vineo subscription to your friends or family. It's a great way to share the experience.",
    },
    {
      question: "What are Vineo Coins?",
      answer: "Vineo Coins are our loyalty rewards that can be used to access exclusive discounts, premium wines, and unique experiences.",
    },
    {
      question: "How can I see the wines I have already tried?",
      answer: "You can view the list of wines you've tried in your personal account history, where each wine is recorded with your ratings.",
    },
    {
      question: "What can I expect from Vineo in the future?",
      answer: "We are continuously working to improve our service and offer new features, including more personalized recommendations and exclusive wine experiences.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:py-16 py-10 bg-white flex flex-col items-center  px-6 md:px-12 lg:px-20 ">
      {/* Heading for "Frequently Asked Questions" */}
      <Heading 
        text="Frequently Asked Questions" 
        size="large" // Matches 'text-3xl md:text-4xl lg:text-5xl'
        color="text-customGray" 
        bold // Matches 'font-bold'
        align="text-center" // Matches 'text-center'
        className="items-center mb-[3rem]" // Adds the additional margin and centering class
      />
      <div className="text-xl md:text-2xl lg:text-3xl font-domine text-center text-description mb-8 max-w-[60rem]">
        We answer your questions here, but if you still have any that are not resolved in this section, do not hesitate to contact us via WhatsApp.
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-[80rem]">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-borderBottom mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left  py-4 text-customGray font-domine font-semibold text:xl md:text-2xl transition-all duration-300"
            >
              {item.question}
              <span
                className={`font-domine text-5xl pl-3 text-pluscolor transform transition-transform duration-500 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
              >
                +
              </span>
            </button>


            {activeIndex === index && (
              <div className="text-xl font-domine text-description text-left  mb-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
