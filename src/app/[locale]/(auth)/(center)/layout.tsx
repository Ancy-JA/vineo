'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      const userToken = localStorage.getItem('accessToken');
      console.log('User Token on Check:', userToken); // Debugging

      // Redirect if user is authenticated and on login page
      if (userToken && pathname === '/sign-in') {
        console.log('Redirecting to dashboard...');
        router.push('/userdashboard');
      }

      // Redirect to login if accessing a protected route without token
      if (!userToken && pathname !== '/sign-in') {
        console.log('Redirecting to sign-in...');
        router.push('/sign-in');
      }

      // Mark the check as complete
      setIsCheckingAuth(false);
    };

    // Only perform checks when not on the sign-in page
    if (pathname !== '/sign-in') {
      checkAuthentication();
    } else {
      // Allow rendering for the login page
      setIsCheckingAuth(false);
    }
  }, [router, pathname]);

  if (isCheckingAuth) {
    // Prevent rendering until authentication check is complete
    return null;
  }

  return <div>{props.children}</div>;
}
