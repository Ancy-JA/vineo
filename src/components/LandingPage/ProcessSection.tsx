import Image from 'next/image';
import Link from 'next/link';

export default function ProcessSection() {
  return (
    <div className="py-12 bg-white flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/squares.svg"
              alt="Wine Selection Process"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
              The Process
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-customGray mb-4">
              How do we find the perfect wines for you?
            </h4>
            <p className="text-sm md:text-base mb-4">
              We analyze your wine preferences based on 18 key aspects.
              <br />
              Then, our algorithm determines the probability that you will enjoy each bottle we include in your box.
              <br />
              This value is used to carefully select the wine bottles that we include in your box.
            </p>
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-3 px-8 rounded-md shadow-lg">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}
