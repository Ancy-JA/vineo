// NavigationWrapper.tsx (Client Component)
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { GrHomeRounded } from 'react-icons/gr';

export default function NavigationWrapper() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const isActive = (path: string) =>
    pathname === path ? 'text-customPink md:border-r-4 border-customPink' : 'text-customGray rounded-lg';

  return (
    <nav className="flex flex-col space-y-4 pl-2 md:px-4">
      <Link href="/userdashboard" className={isActive('/userdashboard')}>
        <GrHomeRounded size={19} />
        <span className="hidden md:inline">{t('layout.home')}</span>
      </Link>
      {/* Add other navigation links here */}
    </nav>
  );
}
