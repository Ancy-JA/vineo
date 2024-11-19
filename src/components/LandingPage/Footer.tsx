import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" border-t py-8 px-6 md:px-12 lg:px-20 text-customGray relative"
    style={{
      background: 'linear-gradient(176.41deg, #FEFDFC 52.27%, #E0DBD2 77.73%, #E0DBD2 150.52%)',
    }}
    >
      {/* Footer Content in Rows */}
      <div className="flex flex-col gap-6 text-center">
        {/* Logo Section */}
        <div>
          <Image src="/vineo.png" alt="Vineo Logo" width={120} height={40} />
        </div>

        {/* Links Section */}
        <div className="flex items-center justify-center text-sm gap-6">
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
          <div className="text-sm text-description font-domine mt-6">Follow us on social media</div>
          <div className="flex gap-4">
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
      </div>

      {/* Copyright */}
      <div className="mt-6">
        <p className="text-sm text-customGray text-center">
          Copyright© 2023 vineo. all rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gray-300 hover:bg-gray-400 rounded-full p-3 px-6 absolute bottom-6 right-6 shadow-lg"
      >
        <span className="text-gray-700 text-lg">↑</span>
      </button>
    </footer>
  );
}
