// src/components/CenteredLayout.tsx
import React from 'react';
import AuthGuard from '@/components/Authentication';
import Sidebar from '@/components/Sidebar';

export default function CenteredLayout({
  children,
  isSignInPage = false,
}: {
  children: React.ReactNode;
  isSignInPage?: boolean;
}) {
  return (
    <AuthGuard>
      <div className={`flex min-h-screen ${isSignInPage ? '' : 'ml-16 md:ml-64'}`}>
        {!isSignInPage && (
          <aside className="fixed top-0 left-0 z-50 h-full w-16 md:w-64 bg-white shadow-lg">
            <Sidebar />
          </aside>
        )}
        <main className="flex-grow flex flex-col p-6 bg-gray-100 h-full overflow-auto">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
