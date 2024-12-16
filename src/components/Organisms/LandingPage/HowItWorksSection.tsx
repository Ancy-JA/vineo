import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/app/constants/imageconstants';
import Button from '@/components/Atoms/Button';
import Heading from '@/components/Atoms/Heading';

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
        <Heading
          text="How It Works"
          size="xlarge"
          bold
          align="center"
          className="mb-12 pb-12 mt-12 pt-12"
        />

      </div>

      {/* Card Container */}
      <div className="flex flex-1 flex-col md:flex-row  mt-5 justify-center items-center gap-14 md:gap-3 lg:gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-custom-gradient1 p-6 md:p-2 lg:p-6 rounded-xl shadow-all-sides-2xl text-center flex flex-col items-center flex-1 max-w-[30rem] max-h-[25rem] md:min-h-[30rem] lg:min-h-[26rem] xl:min-h-[23rem] 2xl:min-h-[20rem] "
          >
            {/* Image positioned half inside and half outside */}
            <div className="absolute -top-12 md:-top-16">
              <Image
                src={card.image}
                alt={card.title}
                width={170}
                height={170}


              />
            </div>
            <div className="font-bold font-domine text-customGray text-2xl md:text-3xl mb-5 mt-16">
              {card.title}
            </div>
            <div className="text-xl md:text-2xl font-domine text-description max-w-[25rem]">
              {card.description}
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-11 mb-11 w-full">
        <Link href="/[locale]/unauth/sign-in" as="/sign-in">
          <Button
            text="Answer the Questionnaire"
            variant="primary" // Matches the style of your current button
            size="large" // Defines consistent padding
            className="bg-customPink hover:bg-darkPink text-white font-domine py-5 px-12 rounded-xl shadow-lg text-lg md:text-2xl max-w-md xl:mt-9" // Custom styles, including responsive text sizes
          />
        </Link>
      </div>

    </div>
  );
}
