// src/app/redux/ClientProvider.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from './store'; // Adjust this path to your Redux store

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
