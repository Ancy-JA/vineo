// AuthGuard.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

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

    checkAuthentication();
  }, [router, pathname]);

  if (isCheckingAuth) {
    return null;
  }

  return <>{React.cloneElement(children as React.ReactElement, { t })}</>;
}
