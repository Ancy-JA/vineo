'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for user authentication via localStorage (or any other method)
    const userToken = localStorage.getItem('accessToken');

    // If userToken exists and user is on the login page, redirect to dashboard
    if (userToken && pathname === '/login') {
      router.push('/userdashboard');
    }

    // If userToken does not exist and user is trying to access protected routes, redirect to login
    if (!userToken && pathname !== '/login') {
      router.push('/login');
    }
  }, [router, pathname]);

  return <div>{props.children}</div>;
}
