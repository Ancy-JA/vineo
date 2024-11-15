// src/app/layout.tsx
import '@/styles/global.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Vineo</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
