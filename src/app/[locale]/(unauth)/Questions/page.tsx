'use client';
import React, { useState } from 'react';
import ChoiceCard from '@/components/LandingPage/ChoiceCard';
import Image from 'next/image';

const coffeeChoices = [
  { title: 'Black and strong', description: 'Embracing the intensity of the dark side, with every galactic sip.' },
  { title: 'With milk and without sugar', description: 'Dairy balance in my cup, but always maintaining the natural sweetness.' },
  { title: 'With cream and/or sugar', description: 'Because life is short and there is always room for a little sweetness.' },
  { title: "I don't drink coffee", description: 'I am more into recharging energy with photosynthesis and good humor.' },
];

const CoffeeChoicePage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/path/to/background.png')] bg-cover bg-center">
      {/* Title Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#303E63]">
  How do you take your coffee?
</h2>


      {/* Image Section */}
      <div className="mb-8">
        <Image
          src="/path/to/coffee-image.png"
          alt="Coffee Illustration"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Choices Section */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {coffeeChoices.map((choice, index) => (
          <ChoiceCard
            key={index}
            title={choice.title}
            description={choice.description}
            isSelected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center mt-8 gap-6">
        <button
          type="button"
          className="text-2xl text-customGray hover:text-customPink"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          type="button"
          className="text-2xl text-customGray hover:text-customPink"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CoffeeChoicePage;
