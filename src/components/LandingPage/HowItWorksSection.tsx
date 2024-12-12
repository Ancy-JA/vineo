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
      
      

      {/* "How It Works" Section */}
      <div className="mt-12">
        <div className="text-center text-2xl md:text-3xl font-domine font-bold text-customGray mb-12 pb-12 mt-12 pt-12">
          How It Works
        </div>
      </div>

      {/* Card Container */}
      <div className="flex flex-1 flex-col md:flex-row  mt-5 justify-center items-center gap-14 md:gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-custom-gradient1 p-6 rounded-xl shadow-all-sides-2xl text-center flex flex-col items-center flex-1 max-w-[30rem] min-h-[19rem] md:min-h-[24rem] xl:min-h-[16rem] "
          >
            {/* Image positioned half inside and half outside */}
            <div className="absolute -top-12 md:-top-16">
              <Image
                src={card.image}
                alt={card.title}
                width={150}
                height={150}
                
               
              />
            </div>
            <div className="font-semibold font-domine text-customGray text-xl md:text-2xl mb-2 mt-16">
              {card.title}
            </div>
            <div className="text-lg md:text-xl font-domine text-description max-w-[25rem]">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-11 mb-11 w-full">
        <Link href="/[locale]/unauth/sign-in" as="/sign-in">
          <button className="bg-customPink hover:bg-darkPink text-white font-domine py-5 px-12 rounded-xl shadow-lg text-lg md:text-2xl  max-w-md">
            Answer the Questionnaire
          </button>
        </Link>
      </div>
    </div>
  );
}
