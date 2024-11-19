// src/app/unauth/layout.tsx
import { unstable_setRequestLocale } from 'next-intl/server';
import ClientProvider from '@/app/redux/ClientProvider'; // Path to your ClientProvider component

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <ClientProvider>
      <div className="">{props.children}</div>
    </ClientProvider>
  );
}
