// src/app/(auth)/AuthLayout.tsx


import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { AppConfig } from '@/utils/AppConfig';
import ClientLanguageSwitcher from '@/components/LSwitcher';

export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';

  // Set French localization if the locale is 'fr'
  if (params.locale === 'fr') {
    clerkLocale = frFR;
  }

  // Update URLs based on the locale
  if (params.locale !== AppConfig.defaultLocale) {
    signInUrl = `/${params.locale}${signInUrl}`;
    signUpUrl = `/${params.locale}${signUpUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
    >
      {/* Include ClientLanguageSwitcher for authenticated pages */}
      <ClientLanguageSwitcher>
        {children}
      </ClientLanguageSwitcher>
    </ClerkProvider>
  );
}
