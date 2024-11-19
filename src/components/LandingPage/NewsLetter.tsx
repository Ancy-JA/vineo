import { IMAGES } from '@/app/constants/imageconstants';

export default function NewsletterSection() {
  return (
    <div className="pt-7 pb-16 md-py-16 bg-white flex flex-col md:flex-row items-center justify-center  px-6 md:px-12 lg:px-20 relative">
      {/* Left Side - Image */}
      <div className="w-full  flex justify-center md:justify-start">
        <img
          src={IMAGES.letter}
          alt="Newsletter Graphic"
          className="max-w-65  object-contain"
        />
      </div>

      {/* Right Side - Text and Input */}
      <div className="w-full  text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold font-domine text-customGray mb-4">
          Don't miss a thing
        </h3>
        <p className="text-sm md:text-base font-inter mb-6">
          Sign up for the newsletter to stay updated on all the news, benefits, and discounts from Vineo.
        </p>

        {/* Input with Button Inside */}
        <div className="flex items-center border border-customGray rounded-2xl p-2 max-w-70">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-0 md-px-4 outline-none text-sm"
          />
          <button className="bg-customPink text-white rounded-xl font-inter px-2 md-px-4 py-2 shadow-md hover:bg-darkPink text-sm">
          subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
