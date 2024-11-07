// src/app/logout/LogoutPage.tsx
'use client';
import React, { useEffect } from 'react';
//import { useRouter } from 'next/router';
import { useLogoutUserMutation } from '@/app/redux/authApi';
import { useRouter } from 'next/navigation';

const LogoutPage: React.FC = () => {
  const [logoutUser] = useLogoutUserMutation();
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      await logoutUser(); // Call the mutation to clear tokens
      router.push('/sign-in'); // Redirect to sign-in page after logging out
    };

    performLogout();
  }, [logoutUser, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
