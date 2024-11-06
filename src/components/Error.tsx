// Error.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Error: React.FC = () => {
  const { t } = useTranslation();
  return <p>{t('errorLoadingSubscriptions')}</p>;
};

export default Error;