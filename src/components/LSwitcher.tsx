// src/components/ClientLanguageSwitcher.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLanguageSwitcher({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';

  // Define the landing page paths based on the locale
  const landingPagePaths = [
    '/en/(unauth)', // English landing page
    '/es/(unauth)', // Spanish landing page
    
  ];

  // Check if the current pathname matches any of the landing page paths
  const isLandingPage = landingPagePaths.includes(pathname);

  return (
    <Provider store={store}>
      {/* Conditionally render LanguageSwitcher only if it's not the landing page */}
      {!isLandingPage && (
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
      )}
      {children}
    </Provider>
  );
}
