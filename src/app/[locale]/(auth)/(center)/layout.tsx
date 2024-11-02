// CenteredLayout.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import { SlSettings } from "react-icons/sl";
import { GrHomeRounded } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IMAGES } from '../../../constants/imageconstants';
import { useTranslation } from 'react-i18next';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const checkAuthentication = () => {
      const userToken = localStorage.getItem('accessToken');
      if (userToken && pathname === '/sign-in') {
        router.push('/userdashboard');
      }
      if (!userToken && pathname !== '/sign-in') {
        router.push('/sign-in');
      }
      setIsCheckingAuth(false);
    };

    if (pathname !== '/sign-in') {
      checkAuthentication();
    } else {
      setIsCheckingAuth(false);
    }
  }, [router, pathname]);

  if (isCheckingAuth) {
    return null;
  }

  // Only apply the layout if the current path is not '/sign-in'
  if (pathname === '/sign-in') {
    return <div>{props.children}</div>;
  }

  const isActive = (path: string) => pathname === path ? 'text-customPink md:border-r-4 border-customPink' : 'text-customGray rounded-lg';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-50 h-full w-16  md:w-64 bg-white shadow-lg transform md:z-20 transition-all duration-300 ease-in-out">
        <div className="flex flex-col ml-1 py-8 md:ml-9">
          <Image src={IMAGES.vineoLogo} alt="Vineo Logo" className="md:w-[100px] md:h-[40px]" width={60} height={32} />
        </div>

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
          <Link href="/logout" className="flex items-center  pb-0 md:px-4 pt-2 hover:bg-gray-100 rounded-lg">
            <LogoutIcon className="mr-2 md:mr-4" />
            <span className="font-inter hidden md:inline-block">{t('layout.logout')}</span>
          </Link>

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
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pl-10 p-6 ml-6 lg:p-10 h-full bg-white-100 transition-all duration-300 scrollbar-rounded md:ml-60 w-full overflow-auto">
        {props.children}
      </main>
    </div>
  );
}
