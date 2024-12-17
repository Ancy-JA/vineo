import { IMAGES } from '@/app/constants/imageconstants';
//import { Button } from '@mui/material';
import Image from 'next/image';
import Button from '@/components/Atoms/Button';
import Heading from '@/components/Atoms/Heading';
import InputField from '@/components/Atoms/InputField';

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
        {/* Heading for "Don't miss a thing" */}
        <Heading
          text="Don't miss a thing"
          size="xlarge" // Matches 'text-4xl md:text-5xl'
          color="text-customGray"
          bold // Matches 'font-bold'
          align="" // Remove default 'text-center' alignment
          className="mb-12" // Matches the margin-bottom
        />
        <div className="text-xl md:text-2xl lg:text-3xl max-w-[55rem] font-domine pb-10 mb-12 ">
          Sign up for the newsletter to stay updated on all the news,
          benefits, and discounts from Vineo.
        </div>

        {/* Input with Button Inside */}
        <div className="relative w-full font-domine ">
          <InputField
            type="email"
            placeholder="Enter your email"
            className="custom-class-if-needed" // Optional extra styles
            onChange={(e) => console.log(e.target.value)} // Handle input changes
            required
          />
          <Button
            text="Subscribe"
            variant="primary" // Matches the intended styling
            size="medium" // Ensures padding and size consistency
            className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-customPink text-white rounded-2xl font-domine px-9 py-3 shadow-md hover:bg-darkPink text-xl md:text-2xl mr-1" // Custom styles for this button
          />
        </div>
      </div>
    </div>
  );
}
