import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';
//import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-footer-gradient pt-[8rem] py-8 px-6 md:px-12 lg:px-20 text-customGray relative "

    >
      
      {/* Footer Content in Rows */}
      <div className="flex flex-col gap-6 text-center border-t border-borderColor mb-5">
        {/* Logo Section */}
        <div className=' pt-12 '>
          <Image src="/vineo.png" alt="Vineo Logo" width={200} height={50} />
        </div>

        {/* Links Section */}
        <div className="flex items-center justify-center text:lg md:text-xl gap-12 ">
          <a href="/terms-of-use" className="hover:text-customPink font-semibold ">
            Terms of Use
          </a>
          <a href="/privacy-policy" className="hover:text-customPink font-semibold ">
            Privacy Policy
          </a>
          <a href="/support" className="hover:text-customPink font-semibold ">
            Support
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="text-lg md:text-xl text-description font-domine mt-6">
            Follow us on social media
          </div>
          <div className="flex gap-9 mt-5">
            {/* WhatsApp */}
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <div className="bg-customPink rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
                <Image
                  src={IMAGES.whatsappFooter}
                  alt="WhatsApp"
                  width={40} // Increased size
                  height={40} // Increased size
                />
              </div>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-customPink rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
                <Image
                  src={IMAGES.facebookFooter}
                  alt="Facebook"
                  width={40} // Increased size
                  height={40} // Increased size
                />
              </div>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-customPink rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
                <Image
                  src={IMAGES.instaFooter}
                  alt="Instagram"
                  width={40} // Increased size
                  height={40} // Increased size
                />
              </div>
            </a>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12">
        <p className="text:lg md:text-xl text-customGray text-center">
          Copyright© 2023 vineo. all rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className=" rounded-full  absolute bottom-6 right-10 "
      >
        <Image
          src="/assets/images/top.svg"
          alt="Scroll to top"
          width={120} // Specify width
          height={120} // Specify height
        />
      </button>
     
    </footer>
  );
}
