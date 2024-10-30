import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IMAGES } from '../app/constants/imageconstants';


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Change language and close dropdown
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button onClick={toggleDropdown} className="flex items-center space-x-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
        <Image
          src={i18n.language === 'en' ? IMAGES.flag_America : IMAGES.flag_Spain}
          alt="Flag"
          width={24}
          height={24}
          className="rounded-full"
        />
        <span>{i18n.language === 'en' ? 'English' : 'Español'}</span>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
          <button
            onClick={() => changeLanguage('en')}
            className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 focus:outline-none"
          >
            <Image
              src={IMAGES.flag_America}
              alt="USA Flag"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 focus:outline-none"
          >
            <Image
              src={IMAGES.flag_Spain}
              alt="Spain Flag"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>Español</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
