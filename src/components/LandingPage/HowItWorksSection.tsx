import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';

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
    <div
      className="flex flex-col items-center px-4 p-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
      }}
    >
      {/* Top Section with Email Input */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-lg md:text-2xl font-inter font-medium text-customGray mb-8 text-center">
          Join the list and take advantage of the launch offer
        </h2>
        <p className="text-xs md:text-sm font-inter text-customGray mb-7 text-center">5€ discount FOREVER</p>
        <div className="flex items-center border border-customGray rounded-2xl p-1 ">

          <input
            type="email"
            placeholder="email"
            className="flex-1 bg-transparent  px-4 md:px-9 outline-none text-sm"
          />
          <button className="bg-customPink text-white rounded-xl font-inter px-4 py-2 shadow-md hover:bg-darkPink text-sm">
            Join Now
          </button>
        </div>
      </div>

      {/* "How It Works" Section */}
      <div className='mt-12'>
      <h2 className="text-center text-xl md:text-2xl font-domine font-bold text-customGray mb-12">
        How It Works
      </h2>
      </div>
      {/* Card Container */}
      <div className="flex flex-col md:flex-row w-full mt-5 justify-center items-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-custom-gradient1 p-6 rounded-lg shadow-all-sides text-center flex flex-col items-center w-full md:w-[18.75rem] h-auto"
          >
            {/* Image positioned half inside and half outside */}
            <div className="absolute -top-12 md:-top-14">
              <Image
                src={card.image}
                alt={card.title}
                width={130}
                height={130}
                className="mb-4"
              />
            </div>
            <p className="font-semibold font-domine text-customGray text-base md:text-lg mb-2 mt-10">
              {card.title}
            </p>
            <p className="text-xs md:text-sm font-inter text-description">
              {card.description}
            </p>
          </div>
        ))}
      </div>




      {/* Call to Action Button */}
      <div className="flex justify-center mt-8 mb-11 w-full">
  <Link href="/[locale]/unauth/sign-in" as="/sign-in">
    <button className="bg-customPink hover:bg-darkPink text-white font-inter py-2 px-8 rounded-xl shadow-lg text-sm w-full max-w-xs">
      Answer the Questionnaire
    </button>
  </Link>
</div>

    </div>
  );
}
