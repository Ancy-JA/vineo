'use client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoadSubscriptionListForUserQuery, useFetchSubscriptionStatusMutation } from '@/app/redux/authApi';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import SubscriptionList from '@/components/Subscription/SubscriptionList';
import { Subscription } from '@/components/Types';

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useLoadSubscriptionListForUserQuery({
    type: [10, 40, 30],
  });

  const [fetchSubscriptionStatus] = useFetchSubscriptionStatusMutation();
  const [renewalDate, setRenewalDate] = useState<string | null>(null);
  const [hasCurrentSubscription, setHasCurrentSubscription] = useState(false);

  useEffect(() => {
    // Fetch the subscription status to get the end date
    const getSubscriptionStatus = async () => {
      try {
        const result = await fetchSubscriptionStatus({}).unwrap();
        if (result?.getSubscriptionStatus?.end_date) {
          // Format the end_date to a more readable format, e.g., "01/11/2024"
          const formattedDate = new Date(result.getSubscriptionStatus.end_date).toLocaleDateString('en-GB');
          setRenewalDate(formattedDate);
        }
      } catch (err) {
        console.error("Failed to fetch subscription status:", err);
      }
    };

    getSubscriptionStatus();
  }, [fetchSubscriptionStatus]);

  useEffect(() => {
    // Check if there's a current subscription in the data
    if (data?.data?.loadSubscriptionListForUser) {
      setHasCurrentSubscription(
        data.data.loadSubscriptionListForUser.some((subscription: Subscription) => subscription.is_current)
      );
    }
  }, [data]);

  console.log('Subscription data:', data);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="min-h-screen p-3 flex flex-col items-center border-t rounded-lg shadow-lg">
      <h2 className="text-2xl font-inter mb-8 p-3 text-left w-full">{t('subscriptionTitle')}</h2>

      <div className="max-w-8xl w-full flex-grow relative">
        {/* Render SubscriptionList with dynamically passed subscriptions */}
        {data?.data?.loadSubscriptionListForUser ? (
          <SubscriptionList
            subscriptions={data.data.loadSubscriptionListForUser.map((subscription: Subscription) => ({
              ...subscription,
              renewalDate: subscription.is_current ? renewalDate : undefined, // Pass renewal date only for current subscription
              description: subscription.description || [], // Assume description is an array or fallback to an empty array if missing
            }))}
          />
        ) : (
          <p>{t('noSubscriptionData')}</p>
        )}
      </div>

      {/* Conditional Cancel Subscription Button */}
      {hasCurrentSubscription && (
        <button className="mt-8 mb-10 mr-4 bg-cancelbackground text-substext font-bold py-2 px-4 rounded self-end">
          {t('cancelSubscription')}
        </button>
      )}
    </div>
  );
};

export default SubscriptionPage;
