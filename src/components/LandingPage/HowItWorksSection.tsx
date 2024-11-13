import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    image: '/assets/images/qnaire1.svg',
    title: 'Answer the Questionnaire',
    description: 'Discover your wine preferences with just 12 simple questions.',
  },
  {
    image: '/assets/images/answer.svg',
    title: 'Discover Your Tastes',
    description: 'Our personalized system will provide wine recommendations tailored to your unique tastes and preferences.',
  },
  {
    image: '/assets/images/bottle2.svg',
    title: 'Enjoy the Experience',
    description: 'Get ready to discover wine every month. Cancel anytime.',
  },
];

export default function HowItWorksSection() {
  return (
    <div className="h-full max-h-screen overflow-y-auto bg-[#f0f0e9] flex flex-col items-center px-4 py-10">
      {/* Top Section with Email Input */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-[#2f2f2f] mb-2 text-center">
          Join the list and take advantage of the launch offer
        </h2>
        <p className="text-xs md:text-sm text-[#7a7a7a] mb-4 text-center">5€ discount FOREVER</p>
        <div className="flex items-center border border-[#ccc] rounded-full p-2 w-full max-w-xs">
          <input
            type="email"
            placeholder="email"
            className="flex-1 bg-transparent px-4 outline-none text-sm"
          />
          <button className="bg-[#f76c5e] text-white rounded-full px-4 py-2 shadow-md hover:bg-[#e55e5e] text-sm">
            Join Now
          </button>
        </div>
      </div>

      {/* "How It Works" Section */}
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#2f2f2f] mb-12">
        How It Works
      </h2>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full md:w-1/3 max-w-xs"
          >
            {/* Image positioned half inside and half outside */}
            <div className="absolute -top-12 md:-top-13">
              <Image
                src={card.image}
                alt={card.title}
                width={130}
                height={130}
                className="mb-4"
              />
            </div>
            <p className="font-semibold text-base md:text-lg mb-2 mt-10">{card.title}</p>
            <p className="text-xs md:text-sm text-[#555]">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-8 mb-4">
        <Link href="/[locale]/unauth/sign-in" as="/sign-in">
          <button className="bg-[#f76c5e] hover:bg-[#e55e5e] text-white font-semibold py-2 px-8 rounded-full shadow-lg text-sm">
            Answer the Questionnaire
          </button>
        </Link>
      </div>
    </div>
  );
}
