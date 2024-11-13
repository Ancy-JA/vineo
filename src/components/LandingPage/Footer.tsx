import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f5f5f5] to-[#e7e5e5] py-8 px-6 md:px-12 lg:px-20 text-customGray">
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-6">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Image src="/vineo.png" alt="Vineo Logo" width={120} height={40} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6 md:mb-0">
          <a href="/terms-of-use" className="hover:text-customPink font-semibold text-sm">
            Terms of Use
          </a>
          <a href="/privacy-policy" className="hover:text-customPink font-semibold text-sm">
            Privacy Policy
          </a>
          <a href="/support" className="hover:text-customPink font-semibold text-sm">
            Support
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6 mb-6 md:mb-0">
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-customPink text-xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-customPink text-xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-customPink text-xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Copyright and Back to Top */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          © 2023 Vineo. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 px-4 mt-4 md:mt-0"
        >
          <span className="text-gray-700 text-lg">↑</span>
        </button>
      </div>
    </footer>
  );
}
