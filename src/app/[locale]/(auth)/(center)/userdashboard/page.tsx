// DashboardPage.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } from '@/app/redux/authApi';
import BoxCard from '@/components/UserDashboard/Boxcard';
import InfiniteScrollLoader from '@/components/UserDashboard/InfiniteScrollLoader';
import SubscriptionStatusLoader from '@/components/UserDashboard/SubscriptionStatusLoader';
import useLenisScroll from '@/utils/useLenisScroll';
import useInfiniteScroll from '@/utils/useInfiniteScroll';
import type { Box } from '@/components/Types';

const DashboardPage: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const scrollRef = useLenisScroll();
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

  const { data: boxHistoryData, error: boxHistoryError, isFetching } = useGetBoxHistoryQuery(
    { page, limit: 4 },
    { skip: !isLoggedIn }
  );

  const [getSubscriptionStatus, { isLoading: subscriptionLoading }] = useGetSubscriptionStatusMutation();

  useEffect(() => {
    if (boxHistoryData) {
      const newBoxes = boxHistoryData?.data?.getBoxHistory?.boxes || [];
      const totalAvailableBoxes = boxHistoryData?.data?.getBoxHistory?.box_count || 0;
      setBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
      setHasMore(boxes.length + newBoxes.length < totalAvailableBoxes);
    }
  }, [boxHistoryData]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/sign-in');
    } else {
      getSubscriptionStatus({});
    }
  }, [isLoggedIn, router, getSubscriptionStatus]);

  const loadMoreData = () => {
    if (hasMore && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const lastElementRef = useInfiniteScroll({
    isFetching,
    hasMore,
    onLoadMore: loadMoreData,
  });

  return (
    <div className="flex min-h-screen  bg-gray-100 overflow-x-hidden" ref={scrollRef}>
      
      <main className="flex-grow p-6 md:p-8 lg:p-10 bg-white shadow-md rounded-lg max-w-screen-lg mx-auto overflow-hidden">
      <SubscriptionStatusLoader loading={subscriptionLoading} />
        {boxes.map((box, index) => (
          <BoxCard key={index} box={box} />
        ))}
        <InfiniteScrollLoader isFetching={isFetching} hasMore={hasMore} loadMore={loadMoreData} lastElementRef={lastElementRef} />
        {boxHistoryError && <p className="text-red-500 text-center mt-4">Error loading box history</p>}
      </main>
    </div>
  );
};

export default DashboardPage;
