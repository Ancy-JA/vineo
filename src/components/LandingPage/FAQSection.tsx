import { useState } from 'react';

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
    <div className="py-16 bg-[#f5f5f5] flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
      <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
        Frequently Asked Questions
      </h3>
      <p className="text-sm md:text-base text-customGray mb-8">
        We answer your questions here, but if you still have any that are not resolved in this section, do not hesitate to contact us via WhatsApp.
      </p>

      {/* FAQ Items */}
      <div className="w-full max-w-2xl">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-customGray font-semibold text-lg"
            >
              {item.question}
              <span className="text-customGray">
                {activeIndex === index ? '×' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="text-sm text-customGray mb-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
