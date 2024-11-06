// Loader.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Loader: React.FC = () => {
  const { t } = useTranslation();
  return <p>{t('loading')}</p>;
};

export default Loader;