import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row max-w-6xl items-center bg-white p-8">
        
        {/* Left Section - Text and Button */}
        <div className="md:w-1/2 flex flex-col items-start p-6">
          {/* Logo */}
          <Image
            src="/vineo.png" // Update with your actual logo path
            alt="Vineo Logo"
            width={150}
            height={50}
          />

          {/* Headline */}
          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Discover the perfect wine for you
          </h1>

          {/* Description */}
          <p className="mt-2 text-lg text-gray-600 max-w-md">
            Join Vineo and match with wines that fit your taste thanks to our personalized recommendations.
            <br />
            Be surprised with new flavors and unforgettable experiences.
          </p>

          {/* Call to Action Button */}
          <Link href="/sign-in">
            <button
              type="button"
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md"
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/banner.png" // Path to your wine bottle image
            alt="Wine bottles"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}






