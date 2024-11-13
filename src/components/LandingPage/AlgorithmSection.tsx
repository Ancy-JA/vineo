import Image from 'next/image';
import Link from 'next/link';

export default function AlgorithmSection() {
  return (
    <div className="py-12 bg-white flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
              The Algorithm
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-customGray mb-4">
              Each time you rate a wine, the algorithm improves
            </h4>
            <p className="text-sm md:text-base mb-4">
              Our algorithm learns from every wine you rate. The more you rate, the more accurate our recommendations become.
            </p>
            <Link href="/[locale]/unauth/sign-in" as="/sign-in">
              <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-3 px-8 rounded-md shadow-lg">
                Start
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/graphDetails.svg" // Update with the correct image path
              alt="Algorithm UI"
              width={300}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
  );
}
