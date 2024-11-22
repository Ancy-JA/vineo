import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { IMAGES } from '@/app/constants/imageconstants';

export default function ProcessSection() {
  return (
    <div className="pt-12 pb-16 bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center  px-6 md:px-12 lg:px-20 gap-10">
        {/* Image Section */}
        <div className=" flex justify-center">
          <Image
            src={IMAGES.gif1}
            alt="Wine Selection Process"
            width={300}
            height={300}
            className="rounded-lg "
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <Heading title="The Process" className="text-3xl md:text-3xl text-customGray font-domine  mb-4" />
          <Heading
            title="How do we find the perfect wines for you?"
            className="text-2xl md:text-3xl text-customGray font-domine font-semibold mb-4"
          />
          <Text
            content="We analyze your wine preferences based on 18 key aspects."
            className="text-sm md:text-base text-description mb-4"
          />
          <Text
            content="Then, our algorithm determines the probability that you will enjoy each bottle we include in your box."
            className="text-sm md:text-base text-description mb-4"
          />
          <Text
            content="This value is used to carefully select the wine bottles that we include in your box."
            className="text-sm md:text-base text-description mb-4"
          />
          <Link href="/[locale]/unauth/sign-in" as="/sign-in">
            <button className="bg-customPink hover:darkPink text-white py-3 px-8 rounded-xl shadow-lg">
              Start Now
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}
