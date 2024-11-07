
import { useState, useEffect } from 'react';
import { useFetchSubscriptionStatusMutation } from '@/app/redux/authApi';
import { Subscription } from '@/components/Types';

export const useSubscriptionStatus = (subscriptions: Subscription[] | undefined) => {
  const [fetchSubscriptionStatus] = useFetchSubscriptionStatusMutation();
  const [renewalDate, setRenewalDate] = useState<string | null>(null);
  const [hasCurrentSubscription, setHasCurrentSubscription] = useState(false);

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      try {
        const result = await fetchSubscriptionStatus({}).unwrap();
        if (result?.data?.getSubscriptionStatus?.end_date) {
          setRenewalDate(result.data.getSubscriptionStatus.end_date);
        }
      } catch (err) {
        console.error("Failed to fetch subscription status:", err);
      }
    };
    getSubscriptionStatus();
  }, [fetchSubscriptionStatus]);

  useEffect(() => {
    if (subscriptions) {
      setHasCurrentSubscription(
        subscriptions.some((subscription) => subscription.is_current)
      );
    }
  }, [subscriptions]);

  return { renewalDate, hasCurrentSubscription };
};
