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
    <div className="h-[38rem] md:h-[48rem] m-3 rounded-xl w-[9rem] md:w-[14rem] flex flex-col  md:shadow-all-sides-xl md:bg-sidebar-gradient">
      {/* Logo Section */}
      <div className="flex flex-col md:pl-8 py-8">
        <Image
          src={IMAGES.vineoLogo}
          alt="Vineo Logo"
          className="md:w-[100px] md:h-[40px]"
          width={50}
          height={20}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 md:px-4">
        <Link href="/userdashboard" className={`flex items-center py-2 hover:bg-gray-100 ${isActive('/userdashboard')}`}>
          <GrHomeRounded className="mr-4" size={19} />
          <div className="font-inter hidden md:inline-block">{t('layout.home')}</div>
        </Link>
        <Link href="/virtualcellar" className={`flex items-center py-2 hover:bg-gray-100 ${isActive('/virtualcellar')}`}>
          <Image src={IMAGES.virtualcellar} alt="Virtual Cellar" width={24} height={20} className="mr-4" />
          <div className="font-inter hidden md:inline-block">{t('layout.virtualCellar')}</div>
        </Link>
        <Link href="/subscription" className={`flex items-center py-2 hover:bg-gray-100 ${isActive('/subscription')}`}>
          <CiStar className="mr-4" size={25} />
          <div className="font-inter hidden md:inline-block">{t('layout.subscription')}</div>
        </Link>
        <Link href="/settings" className={`flex items-center py-2 hover:bg-gray-100 ${isActive('/settings')}`}>
          <SlSettings className="mr-4" size={20} />
          <div className="font-inter hidden md:inline-block">{t('layout.settings')}</div>
        </Link>
        <Link href="/history" className={`flex items-center py-2 hover:bg-gray-100 ${isActive('/history')}`}>
          <MdHistory className="mr-4" size={23} />
          <div className="font-inter hidden md:inline-block">{t('layout.history')}</div>
        </Link>
        <Link href="/logout" className="flex items-center py-2 md:py-[5rem] hover:bg-gray-100 rounded-lg">
          <LogoutIcon className="mr-4" />
          <div className="font-inter hidden md:inline-block">{t('layout.logout')}</div>
        </Link>
      </nav>

      {/* User Info Section */}
      <div className="flex items-center md:px-4 mt-auto py-6">
        <Image src={IMAGES.coins} alt="Vineo coins" width={40} height={45} className="mr-4" />
        <div className="hidden md:block">
          <div className="font-inter text-lg">{t('layout.username')}</div>
          <div className="text-sm font-inter font-bold">
            {t('layout.coins', { count: 400 })}
          </div>
        </div>
      </div>
    </div>
  );
}
