// src/app/layout.tsx
'use client';
import '@/styles/global.css'; // Assuming your global styles are here

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import '../../i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Vineo</title>
        {/* You can also add other global head elements here */}
      </head>
      <body>
        <Provider store={store}>
          {/* Language Switcher at the top-right corner */}
          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitcher />
          </div>
          
          {/* Render only children, without additional layout elements */}
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
