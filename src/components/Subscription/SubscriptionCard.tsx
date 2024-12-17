// SubscriptionCard.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SharedCard from '@/components/Molecules/Card';

interface SubscriptionCardProps {
  title: string;
  sub_title: string;
  amount: number;
  description: string[];
  is_current: boolean;
  renewalDate?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  sub_title,
  amount,
  description,
  is_current,
  renewalDate,
}) => {
  const { t } = useTranslation();

  return (
    <SharedCard
      title={title}
      subTitle={sub_title}
      amount={amount}
      description={description}
      isCurrent={is_current}
      renewalDate={renewalDate}
      buttonText={t('subscribe')}
    />
  );
};

export default SubscriptionCard;
