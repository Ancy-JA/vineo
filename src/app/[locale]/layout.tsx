// src/app/layout.tsx
'use client';
import '@/styles/global.css'; // Assuming your global styles are here

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/redux/store';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Vineo</title>
        {/* You can also add other global head elements here */}
      </head>
      <body>
        <Provider store={store}>
          {/* Global elements like header, sidebar, footer can go here */}

          <main>{children}</main>

        </Provider>
      </body>
    </html>
  );
}
