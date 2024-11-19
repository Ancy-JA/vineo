// src/app/auth/center/sign-in/layout.tsx
import React from 'react';

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
