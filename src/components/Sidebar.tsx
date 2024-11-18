// Sidebar.tsx (Client Component)
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { GrHomeRounded } from 'react-icons/gr';
import { SlSettings } from 'react-icons/sl';
import { MdHistory } from 'react-icons/md';
import { CiStar } from 'react-icons/ci';
import { IMAGES } from '@/app/constants/imageconstants';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  // Hide the sidebar if the current path is '/sign-in'
  if (pathname === '/sign-in') {
    return null;
  }

  const isActive = (path: string) =>
    pathname === path ? 'text-customPink md:border-r-4 border-customPink' : 'text-customGray rounded-lg';

  return (
    <div className="flex flex-col">
      {/* Logo Section */}
      <div className="flex flex-col ml-1 py-8 md:ml-9">
        <Image
          src={IMAGES.vineoLogo}
          alt="Vineo Logo"
          className="md:w-[100px] md:h-[40px]"
          width={60}
          height={32}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 pl-2 md:px-4">
        <Link href="/userdashboard" className={`flex items-center md:px-4 py-2 hover:bg-gray-100 ${isActive('/userdashboard')}`}>
          <GrHomeRounded className="mr-2 md:mr-4" size={19} />
          <span className="font-inter hidden md:inline-block">{t('layout.home')}</span>
        </Link>
        <Link href="/virtualcellar" className={`flex items-center md:px-3 py-2 hover:bg-gray-100 ${isActive('/virtualcellar')}`}>
          <Image src={IMAGES.virtualcellar} alt="Virtual Cellar" width={24} height={20} className="mr-2 md:mr-4" />
          <span className="font-inter hidden md:inline-block">{t('layout.virtualCellar')}</span>
        </Link>
        <Link href="/subscription" className={`flex items-center md:px-3 py-2 hover:bg-gray-100 ${isActive('/subscription')}`}>
          <CiStar className="mr-2 md:mr-4" size={25} />
          <span className="font-inter hidden md:inline-block">{t('layout.subscription')}</span>
        </Link>
        <Link href="/settings" className={`flex items-center md:px-4 py-2 hover:bg-gray-100 ${isActive('/settings')}`}>
          <SlSettings className="mr-2 md:mr-4" size={20} />
          <span className="font-inter hidden md:inline-block">{t('layout.settings')}</span>
        </Link>
        <Link href="/history" className={`flex items-center md:px-4 py-2 hover:bg-gray-100 ${isActive('/history')}`}>
          <MdHistory className="mr-1 md:mr-4" size={23} />
          <span className="font-inter hidden md:inline-block">{t('layout.history')}</span>
        </Link>
        <Link href="/logout" className="flex items-center pb-0 md:px-4 pt-2 hover:bg-gray-100 rounded-lg">
          <LogoutIcon className="mr-2 md:mr-4" />
          <span className="font-inter hidden md:inline-block">{t('layout.logout')}</span>
        </Link>

        {/* User Info Section */}
        <div className="flex items-center md:px-3">
          <Image src={IMAGES.coins} alt="Vineo coins" width={40} height={45} className="mr-2 md:mr-4 md:w-30 md:h-40" />
          <div className="hidden md:block">
            <div className="font-inter text-lg">{t('layout.username')}</div>
            <div className="text-sm font-inter font-bold">
              {t('layout.coins', { count: 400 })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
