'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import { SlSettings } from "react-icons/sl";
import { GrHomeRounded } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
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
      if (isFetching || !hasMore) return; // Prevent multiple calls if already fetching or no more boxes

      if (observer.current) observer.current.disconnect(); // Disconnect previous observer

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // Trigger to load more data
        }
      });

      if (node) observer.current.observe(node); // Attach the observer to the last box element
    },
    [isFetching, hasMore, page] // Added `page` to dependencies
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

      // Only set `hasMore` if there are new boxes to avoid fetching unnecessary pages
      if (newBoxes.length > 0) {
        setBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
        setHasMore(newBoxes.length === 4); // Adjust based on the limit
      } else {
        // Explicitly stop further requests if no new boxes are available
        setHasMore(false);
        if (observer.current) observer.current.disconnect(); // Disconnect observer
      }
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
      <div className="fixed top-0 left-0 z-20 h-100 w-64 bg-white shadow-lg">
        <div className="flex flex-col ml-9 py-8">
          <Image src={IMAGES.vineoLogo} alt="Vineo Logo" width={100} height={40} />
        </div>
        <nav className="flex flex-col space-y-6 px-4">
          <Link href="/profile" className="flex items-center  px-4 hover:bg-gray-100 rounded-lg">
            <GrHomeRounded  className="mr-4 text-customPink"size={19} />
            <span className="text-customPink font-inter">Home</span>
          </Link>
          <Link href="/dashboard" className="flex items-center  px-3 hover:bg-gray-100 rounded-lg">
            <Image src={IMAGES.virtualcellar} alt="Virtual Cellar" width={24} height={20} className="mr-4" />
            <span className="text-gray-800 font-inter">Virtual Cellar</span>
          </Link>
          <Link href="/subscription" className="flex items-center  px-3 hover:bg-gray-100 rounded-lg">
            <CiStar  className= "mr-4 text-gray-600"size={25} />
            <span className="text-gray-800 font-inter">Subscription</span>
          </Link>
          <Link href="/settings" className="flex items-center  px-4 hover:bg-gray-100 rounded-lg">
            <SlSettings   className="mr-4 text-gray-500 "size={20} />
            <span className="text-gray-800 font-inter">Settings</span>
          </Link>
          <Link href="/logout" className="flex items-center py-10 px-4 hover:bg-gray-100 rounded-lg">
            <LogoutIcon className="mr-4 text-gray-500" />
            <span className="text-gray-800 font-inter">Logout</span>
          </Link>
          <div className="flex  mt-8 px-4 py-4">
            <Image src={IMAGES.coins} alt="Vineo coins" width={40} height={40} className="mr-4" />
            <div>
              <div className="font-inter text-gray-800">Carlos Bernabeu</div>
              <div className="text-sm text-gray-500 mb-10">400 Vineo Coins</div>
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
            <h2 className="text-xl font-inter text-gray-800 mb-4">Box from {new Date(box.date).toLocaleDateString()}</h2>
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
