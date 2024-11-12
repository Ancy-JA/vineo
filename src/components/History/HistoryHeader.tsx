// components/History/HistoryHeader.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const HistoryHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden xl:grid grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left font-semibold bg-gray-200 flex-grow">
      <div>{t('historyPage.userDetails')}</div>
      <div>{t('historyPage.wineInBox')}</div>
      <div>{t('historyPage.creationDate')}</div>
      <div>{t('historyPage.deliveryDate')}</div>
      <div>{t('historyPage.boxType')}</div>
      <div>{t('historyPage.status')}</div>
      <div>{t('historyPage.actions')}</div>
    </div>
  );
};

export default HistoryHeader;
