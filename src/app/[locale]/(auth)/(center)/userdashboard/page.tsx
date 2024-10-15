'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ExitToApp } from '@mui/icons-material';
import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } from '@/app/redux/authApi';
import { IMAGES } from '../../../../constants/imageconstants';

interface Wine {
  wine_name: string;
  image: string;
  rating: number;
  area: string;
  store: string;
}

const DashboardPage: React.FC = () => {
  const [boxes, setBoxes] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();

  // API hook for fetching box history with pagination
  const { data: boxHistoryData, error: boxHistoryError, isFetching } = useGetBoxHistoryQuery(
    { page, limit: 4 },
    { skip: !isLoggedIn }
  );

  // API hook for fetching subscription status
  const [getSubscriptionStatus, { data: subscriptionStatusData, isLoading: subscriptionLoading, error: subscriptionError }] =
    useGetSubscriptionStatusMutation();

  // Infinite scroll observer
  const observer = useRef<IntersectionObserver | null>(null);
  
  const lastBoxElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching) return; // Prevent multiple calls if already fetching

      if (observer.current) observer.current.disconnect(); // Disconnect previous observer

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // Trigger to load more data
        }
      });

      if (node) observer.current.observe(node); // Attach the observer to the last box element
    },
    [isFetching, hasMore]
  );

  useEffect(() => {
    if (subscriptionStatusData) {
      console.log('Subscription Status:', subscriptionStatusData);
    }
  }, [subscriptionStatusData]);

  useEffect(() => {
    if (boxHistoryData) {
      console.log('Box History Data:', boxHistoryData);

      // Safely access the boxes data and append to current list
      const newBoxes = boxHistoryData?.data?.getBoxHistory?.boxes || [];
      console.log("newboxes", newBoxes);

      setBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
      setHasMore(newBoxes.length > 0); // If no new boxes, stop infinite scroll
    }

    if (boxHistoryError) {
      console.error('Error fetching box history:', boxHistoryError);
    }
  }, [boxHistoryData, boxHistoryError]);

  // Check if user is logged in and fetch data from API
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
      getSubscriptionStatus({});
    }
  }, [router, getSubscriptionStatus]);

  // Helper function to render stars based on wine rating
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-customPink" : "text-gray-400"}>★</span>
      );
    }

    return <div>{stars}</div>;
  };

  return (
    <div className="flex min-h-screen w-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-20 h-full w-64 bg-white shadow-lg">
        <div className="flex flex-col items-center py-6">
          <Image src={IMAGES.vineoLogo} alt="Vineo Logo" width={100} height={50} />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link href="/profile" className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg">
            <Image src={IMAGES.home} alt="home" width={25} height={25} /> Home
          </Link>
          <Link href="/dashboard" className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg">
            <Image src={IMAGES.virtualcellar} alt="virtualcellar" width={25} height={25} /> Virtual Cellar
          </Link>
          <Link href="/subscription" className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg">
            <Image src={IMAGES.subscription} alt="subscription" width={25} height={25} /> Subscription
          </Link>
          <Link href="/settings" className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg">
            <Image src={IMAGES.settings} alt="settings" width={25} height={25} /> Settings
          </Link>
          <Link href="/logout" className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg">
            <ExitToApp className="mr-2" /> Logout
          </Link>
          <div className="flex">
            <Image src="/assets/images/coins.svg" alt="coins" width={45} height={45} />
            <div>
              <div>Carlos Bernabeu</div>
              Vineo coins
            </div>
          </div>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-grow p-6 lg:p-10 bg-white-100 ml-64">
        {/* Display Dynamically Fetched Box History */}
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-6 w-full"
            ref={index === boxes.length - 1 ? lastBoxElementRef : null} // Attach ref to last box for infinite scroll
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Box from {new Date(box.date).toLocaleDateString()}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {box.wines.map((wine: Wine, wineIndex: number) => (
                  <div key={wineIndex} className="flex flex-col items-center">
                    <Image src={wine.image} alt={wine.wine_name} width={80} height={80} className="rounded-lg shadow" />
                    <div className="mt-2 text-center">
                      <h3 className="text-customPink font-semibold">{wine.wine_name}</h3>
                      <p className="text-sm text-gray-500"> {wine.area}</p>
                      <p className="text-sm text-gray-500"> {wine.store}</p>
                      <p>{renderStars(wine.rating)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center col-span-1">
                <Image src={IMAGES.graph} alt="Chart" width={300} height={300} className="rounded-lg shadow" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                View Box Details
              </button>
            </div>
          </div>
        ))}

        {/* Display Loading */}
        {isFetching && <p>Loading...</p>}
        {subscriptionLoading && <p>Loading Subscription Status...</p>}

        {/* Display any errors */}
        {boxHistoryError && <p>Error loading box history</p>}
        {subscriptionError && <p>Error loading subscription status</p>}
      </div>
    </div>
  );
};

export default DashboardPage;
