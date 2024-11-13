"use client";

//import Link from 'next/link';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      title: 'Basic Plan',
      originalPrice: '100€',
      discountedPrice: '90€',
      features: [
        '✓ Cancel anytime',
        '✓ Personalized profile',
        '✓ 1 box of 3 wines based on your tastes',
        '✓ Free cancellation anytime',
      ],
      variant: 'secondary',
      buttonText: 'Start',
    },
    {
      id: 2,
      title: 'Premium Plan',
      originalPrice: '250€',
      discountedPrice: '200€',
      features: [
        '✓ Personalized profile',
        '✓ 1 box of 3 wines based on your tastes',
        '✓ Free cancellation anytime',
      ],
      variant: 'primary',
      buttonText: 'Choose Plan',
      recommended: true,
    },
    {
      id: 3,
      title: 'Pro Plan',
      originalPrice: '600€',
      discountedPrice: '590€',
      features: [
        '✓ Cancel anytime',
        '✓ Personalized profile',
        '✓ 1 box of 3 wines based on your tastes',
        '✓ Free cancellation anytime',
      ],
      variant: 'secondary',
      buttonText: 'Start',
    },
  ];

  // Function to determine button classes based on variant
  const getButtonClasses = (variant: string) => {
    const baseClasses = 'font-semibold py-2 px-6 rounded-md shadow-lg transition-colors w-full';
    const variantClasses = {
      primary: 'bg-white hover:bg-[#e55e5e] text-gray-800',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    };

    return `${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.primary}`;
  };

  return (
    <div className="py-16 bg-[#f5f5f5] flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
      <h3 className="text-2xl md:text-3xl font-bold text-customGray mb-4">
        Choose the price that best suits you
      </h3>
      <p className="text-sm md:text-base text-customGray mb-8">
        You can change your subscription at any time
      </p>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-6xl">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 w-full md:w-1/3 rounded-lg shadow-md ${
              plan.recommended ? 'bg-customPink text-white' : 'bg-white border-2 border-gray-300'
            }`}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-white text-customPink font-semibold px-3 py-1 rounded-bl-lg">
                Recommended
              </div>
            )}

            {/* Pricing Details */}
            <p
              className={`text-lg line-through mb-2 ${
                plan.recommended ? 'text-white opacity-70' : 'text-gray-400'
              }`}
            >
              {plan.originalPrice}
            </p>
            <h4 className="text-2xl font-bold mb-4">{plan.discountedPrice}</h4>
            <p className="mb-4">{plan.title}</p>

            {/* Features List */}
            <ul className="text-sm mb-6">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={getButtonClasses(plan.variant)}
              onClick={() => alert(`${plan.title} selected!`)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
