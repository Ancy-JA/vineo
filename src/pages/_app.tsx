// src/pages/_app.tsx
import '@/styles/global.css'; // Assuming your global styles are here

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '@/app/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
