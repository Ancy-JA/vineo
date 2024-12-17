import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';
import Link from '@/components/Atoms/Link';
import Button from '@/components/Atoms/Button';
import Icon from '@/components/Atoms/Icon';
//import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-footer-gradient pt-[8rem] py-8 px-6 md:px-12 lg:px-20 text-customGray relative "

    >

      {/* Footer Content in Rows */}
      <div className="flex flex-col gap-6 text-center border-t border-borderColor mb-5">
        {/* Logo Section */}
        <div className=' pt-12 '>
          <Image src="/vineo.png" alt="Vineo Logo" width={260} height={50} />
        </div>

        {/* Links Section */}
        <div className="flex items-center justify-center text:lg md:text-xl gap-7 xsm:gap-12">
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/support">Support</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="text-lg md:text-xl text-description font-domine mt-6">
            Follow us on social media
          </div>
          <div className="flex gap-9 mt-5">
            {/* WhatsApp */}
            <Icon
              href="https://wa.me"
              src={IMAGES.whatsappFooter}
              alt="WhatsApp"
            />

            {/* Facebook */}
            <Icon
              href="https://facebook.com"
              src={IMAGES.facebookFooter}
              alt="Facebook"
            />

            {/* Instagram */}
            <Icon
              href="https://instagram.com"
              src={IMAGES.instaFooter}
              alt="Instagram"
            />
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
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rounded-full w-[7rem] absolute bottom-6 right-10"
        variant="transparent"
        noPadding={true} // Ensures no extra padding
      >
        <Image
          src={IMAGES.top}
          alt="Scroll to top"
          width={120} // Specify width
          height={120} // Specify height
        />
      </Button>

    </footer>
  );
}
