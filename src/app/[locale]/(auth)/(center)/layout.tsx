import React from 'react';
import AuthGuard from '@/components/Authentication';
import Sidebar from '@/components/Sidebar';

export default function CenteredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Dynamically check if the current page is the sign-in page
  const isSignInPage = (children as any).type?.name === 'LoginPage';

  return (
    <AuthGuard>
      <div className={`flex min-h-screen ${isSignInPage ? '' : 'ml-16 md:ml-64'}`}>
        {!isSignInPage && (
          <aside className="fixed top-0 left-0 ">
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
