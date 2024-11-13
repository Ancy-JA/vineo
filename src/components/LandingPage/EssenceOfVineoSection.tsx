import Image from 'next/image';

export default function EssenceOfVineoSection() {
  return (
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
  );
}
