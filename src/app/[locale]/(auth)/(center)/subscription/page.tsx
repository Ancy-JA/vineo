'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLoadSubscriptionListForUserQuery } from '@/app/redux/authApi';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import { Subscription } from '@/components/Types';
import SubscriptionList from '@/components/CardList';
import { useSubscriptionStatus } from '@/components/Hooks/useSubscriptionStatus';
import CancelSubscriptionButton from '@/components/Subscription/CancelSubscriptionButton';

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useLoadSubscriptionListForUserQuery({
    type: [10, 40, 30],
  });

  // Type the subscriptions array
  const subscriptions = data?.data?.loadSubscriptionListForUser as Subscription[] | undefined;
  const { renewalDate, hasCurrentSubscription } = useSubscriptionStatus(subscriptions);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="min-h-screen p-3 flex flex-col items-center border-t bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-inter mb-8 p-3 text-left w-full">{t('subscriptionTitle')}</h2>

      <div className="max-w-8xl w-full flex-grow relative">
        {subscriptions ? (
          <SubscriptionList
          items={subscriptions.map((subscription: Subscription) => ({
            id: subscription._id,
            title: subscription.title,
            subTitle: subscription.sub_title,
            amount: subscription.amount,
            description: subscription.description || [],
            isCurrent: subscription.is_current,
            renewalDate: subscription.is_current && renewalDate ? renewalDate : undefined,
            buttonText: 'Subscribe',
          }))}
        />
        
        
        
        ) : (
          <p>{t('noSubscriptionData')}</p>
        )}
      </div>

      <CancelSubscriptionButton hasCurrentSubscription={hasCurrentSubscription} />
    </div>
  );
};

export default SubscriptionPage;
