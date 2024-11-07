import React from 'react';
import { useGetLatestUserGiftQuery } from '@/app/redux/authApi';

interface UserGiftProps {
  type: number; // Accept `type` as a prop
}

const UserGift: React.FC<UserGiftProps> = ({ type }) => {
  // Conditionally call the query only if the type is 20
  const { data, error, isLoading } = type === 20 ? useGetLatestUserGiftQuery() : { data: null, error: null, isLoading: false };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading gift data</p>;

  const latestGift = data?.getLatestUserGift;

  return (
    <div>
      {latestGift ? (
        <div>
          <h3>Latest Gift:</h3>
          <p>{latestGift}</p>
        </div>
      ) : (
        <p>No latest gift found</p>
      )}
    </div>
  );
};

export default UserGift;
