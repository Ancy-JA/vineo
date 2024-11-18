import { IMAGES } from '@/app/constants/imageconstants';

export default function NewsletterSection() {
  return (
    <div
      className="py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20 relative"
      style={{
        backgroundImage: `url(${IMAGES.letter})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: window.innerWidth > 1200 ? ' center' : 'left ',
      }}
    >

      {/* Right Side - Text and Input */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
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
