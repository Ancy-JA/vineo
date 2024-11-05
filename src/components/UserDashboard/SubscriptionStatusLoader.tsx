import React from 'react';

interface SubscriptionStatusLoaderProps {
  loading: boolean;
}

const SubscriptionStatusLoader: React.FC<SubscriptionStatusLoaderProps> = ({ loading }) => (
  <>{loading && <p>Loading Subscription Status...</p>}</>
);

export default SubscriptionStatusLoader;
