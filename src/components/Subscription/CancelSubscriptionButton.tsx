import React from 'react';
import { useTranslation } from 'react-i18next';

interface CancelSubscriptionButtonProps {
  hasCurrentSubscription: boolean;
}

const CancelSubscriptionButton: React.FC<CancelSubscriptionButtonProps> = ({ hasCurrentSubscription }) => {
  const { t } = useTranslation();

  if (!hasCurrentSubscription) return null;

  return (
    <button className="mt-8 mb-10 mr-4 bg-cancelbackground text-substext font-bold py-2 px-4 rounded self-end">
      {t('cancelSubscription')}
    </button>
  );
};

export default CancelSubscriptionButton;
