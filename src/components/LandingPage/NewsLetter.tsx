import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <div className="py-16 bg-[#f5f5f5] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <Image
          src="/assets/images/letter.svg"
          alt="Newsletter Illustration"
          width={300}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Right Side - Text and Input */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-customGray mb-4">
          Don't miss a thing
        </h3>
        <p className="text-sm md:text-base mb-6">
          Sign up for the newsletter to stay updated on all the news, benefits, and discounts from Vineo.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-auto flex-1"
          />
          <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold py-2 px-6 rounded-md shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
