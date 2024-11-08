"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="bg-white max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          {/* Top Section - Logo and Headline */}
          <div className="p-6">
            <Image
              src="/vineo.png" // Update with your actual logo path
              alt="Vineo Logo"
              width={120}
              height={40}
            />
            <h1 className="mt-4 text-3xl md:text-4xl font-domine font-bold text-customGray">
              Discover the perfect wine for you
            </h1>
          </div>

          {/* Middle Section - Background Image with Text Overlay */}
          <div
            className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/banner.png')" }} // Update with your image path
          >
            {/* Overlay Content */}
            <div className="absolute text-customGray inset-0 flex flex-col font-domine font-semibold items-start pl-6 bg-white bg-opacity-20 rounded-b-lg">
              <p className="font-semibold text-base md:text-lg">
                Join Vineo to match with wines that
              </p>
              <p>fit your taste thanks to our</p>
              <p>personalized recommendations.</p>
              <p className="mt-3">
                Be surprised with new flavors and
              </p>
              <p>unforgettable experiences.</p>
              <Link href="/[locale]/unauth/sign-in" as="/sign-in">
                <button
                  type="button"
                  className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold mt-3 py-2 px-6 rounded-md shadow-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

     {/* "How It Works" Section */}
<div className="h-screen pt-20 bg-customgrey flex flex-col items-center justify-center">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-customGray mb-12">
    How It Works
  </h2>

  {/* Card Container */}
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-12 lg:px-20">
    {/* Card 1 */}
    <div className="relative bg-[#f4f4f4] p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full md:w-1/3 max-w-xs">
      <div className="absolute -top-16">
        <Image
          src="/assets/images/qnaire1.svg"
          alt="Icon for Questionnaire"
          width={120}
          height={120}
          className="mb-4"
        />
      </div>
      <p className="font-semibold text-lg mb-2">Answer the Questionnaire</p>
      <p className="text-sm">Discover your wine preferences with just 12 simple questions.</p>
    </div>

    {/* Card 2 */}
    <div className="relative bg-[#f5f5f5] p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full md:w-1/3 max-w-xs">
      <div className="absolute -top-16">
        <Image
          src="/assets/images/answer.svg"
          alt="Icon for Discover Tastes"
          width={120}
          height={120}
          className="mb-4"
        />
      </div>
      <p className="font-semibold text-lg mb-2">Discover Your Tastes</p>
      <p className="text-sm">Our personalized system will provide wine recommendations tailored to your unique tastes and preferences.</p>
    </div>

    {/* Card 3 */}
    <div className="relative bg-[#f5f5f5] p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full md:w-1/3 max-w-xs">
      <div className="absolute -top-16">
        <Image
          src="/assets/images/bottle2.svg"
          alt="Icon for Enjoy Experience"
          width={120}
          height={120}
          className="mb-4"
        />
      </div>
      <p className="font-semibold text-lg mb-2">Enjoy the Experience</p>
      <p className="text-sm">Get ready to discover wine every month. Cancel anytime.</p>
    </div>
  </div>

  {/* Button Section */}
  <div className="flex justify-center mt-12">
    <Link href="/[locale]/unauth/sign-in" as="/sign-in">
      <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-3 px-12 rounded-md shadow-lg">
        Answer the Questionnaire
      </button>
    </Link>
  </div>
</div>



     {/* "Process" Section */}
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
{/* "Essence of Vineo" Section */}
<div className="py-12 bg-[#f5f5f5] flex flex-col items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/assets/images/winebottles.svg" // Update with the correct image path
        alt="Vineo Wine Box"
        width={500}
        height={900}
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
        The Essence of Vineo
      </h3>
      <p className="text-sm md:text-base mb-4">
        Receive a box with 3 wines: 2 carefully selected based on your preferences, and 1 that will surprise you with new flavors and experiences.
      </p>
    </div>
  </div>
</div>
{/* "Algorithm" Section */}
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
        src="/assets/images/graphDetails(1)1.svg" // Update with the correct image path
        alt="Algorithm UI"
        width={300}
        height={500}
        className="rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

    </div>
  );
}
