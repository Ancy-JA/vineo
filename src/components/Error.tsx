// Error.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Error: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('errorLoadingSubscriptions')}</div>;
};

export default Error;