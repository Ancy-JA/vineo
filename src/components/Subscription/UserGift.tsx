import React from 'react';
import { useGetLatestUserGiftQuery } from '@/app/redux/authApi';

interface UserGiftProps {
  type: number; // Accept `type` as a prop
}

const UserGift: React.FC<UserGiftProps> = ({ type }) => {
  // Conditionally call the query only if the type is 20
  const { data, error, isLoading } = type === 20 ? useGetLatestUserGiftQuery() : { data: null, error: null, isLoading: false };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading gift data</div>;

  const latestGift = data?.getLatestUserGift;

  return (
    <div>
      {latestGift ? (
        <div>
          <div>Latest Gift:</div>
          <div>{latestGift}</div>
        </div>
      ) : (
        <div>No latest gift found</div>
      )}
    </div>
  );
};

export default UserGift;
