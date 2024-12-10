import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <div className=" pt-7  bg-white  flex flex-col md:flex-row items-center justify-center  px-6 md:px-12 lg:px-20 ">
      {/* Left Side - Image */}
      <div className="relative  flex justify-center translate-x-9 md:translate-x-[-50px]">
        <Image
          src={IMAGES.letter}
          alt="Newsletter Graphic"
          width={1300}
          height={300}
          className="object-contain max-w-full"
        />
      </div>

      {/* Right Side - Text and Input */}
      <div className=" text-center md:text-center  md:-translate-x-[150px] lg:-translate-x-[250px]  ">
        <h3 className="text-2xl md:text-3xl font-bold font-domine text-customGray mb-9">
          Don't miss a thing
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl font-domine pb-10 mb-12 ">
          Sign up for the newsletter to stay updated on all the news,
          <br />
          benefits, and discounts from Vineo.
        </p>

        {/* Input with Button Inside */}
        <div className="relative w-full  ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-customGray rounded-3xl p-5  pr-20 bg-transparent outline-none text-xl md:text-2xl"
          />
          <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-customPink text-white rounded-2xl font-inter px-9 py-3 shadow-md hover:bg-darkPink text-xl md:text-2xl mr-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
