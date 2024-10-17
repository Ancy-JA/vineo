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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Wine {
  wine_name: string;
  image: string;
  rating: number;
  area: string;
  store: string;
}
interface Box {
  date: string;
  wines: Wine[];
}
const DashboardPage: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const { data: boxHistoryData, error: boxHistoryError, isFetching } = useGetBoxHistoryQuery(
    { page, limit: 4 },
    { skip: !isLoggedIn }
  );

  const [getSubscriptionStatus, { data: subscriptionStatusData, isLoading: subscriptionLoading, error: subscriptionError }] =
    useGetSubscriptionStatusMutation();

  const observer = useRef<IntersectionObserver | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll effect using gsap
  useEffect(() => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 500,
        },
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleInfiniteScroll = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
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
      const newBoxes = boxHistoryData?.data?.getBoxHistory?.boxes || [];
      if (newBoxes.length > 0) {
        setBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
        setHasMore(newBoxes.length === 4);
      } else {
        setHasMore(false);
        if (observer.current) observer.current.disconnect();
      }
    }

    if (boxHistoryError) {
      console.error('Error fetching box history:', boxHistoryError);
    }
  }, [boxHistoryData, boxHistoryError]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
      getSubscriptionStatus({});
    }
  }, [router, getSubscriptionStatus]);

  const renderStars = (rating: number) => (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-customPink" : "text-customGray"}>★</span>
      ))}
    </div>
  );



  return (
    <div className="flex min-h-screen w-screen overflow-hidden" ref={scrollRef}>
      <div className="data-scroll-container">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 z-20 h-100 w-64 bg-white shadow-lg">
          <div className="flex flex-col ml-9 py-8">
            <Image src={IMAGES.vineoLogo} alt="Vineo Logo" width={100} height={40} />
          </div>
          <nav className="flex flex-col space-y-6 px-4">

            <Link href="/profile" className="flex items-center px-4 hover:bg-gray-100 border-r-4 border-customPink">
              <GrHomeRounded className="mr-4 text-customPink" size={19} />
              <span className="text-customPink font-inter font-bold">Home</span>
            </Link>
            <Link href="/dashboard" className="flex items-center px-3 hover:bg-gray-100 rounded-lg">
              <Image src={IMAGES.virtualcellar} alt="Virtual Cellar" width={24} height={20} className="mr-4" />
              <span className="text-customGray font-inter">Virtual Cellar</span>
            </Link>
            <Link href="/subscription" className="flex items-center px-3 hover:bg-gray-100 rounded-lg">
              <CiStar className="mr-4 text-customGray" size={25} />
              <span className="text-customGray font-inter">Subscription</span>
            </Link>
            <Link href="/settings" className="flex items-center px-4 hover:bg-gray-100 rounded-lg">
              <SlSettings className="mr-4 text-customGray" size={20} />
              <span className="text-customGray font-inter">Settings</span>
            </Link>
            <Link href="/logout" className="flex items-center py-10 px-4 hover:bg-gray-100 rounded-lg">
              <LogoutIcon className="mr-4 text-customGray" />
              <span className="text-customGray font-inter">Logout</span>
            </Link>
            <div className="flex mt-8 px-3 py-4">
              <Image src={IMAGES.coins} alt="Vineo coins" width={40} height={45} className="mr-4 mb-7" />
              <div>
                <div className="font-inter text-customGray text-lg mb-1.5">Carlos Bernabeu</div>
                <div className="text-sm font-inter font-bold text-customGray mb-10">400 Vineo Coins</div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 lg:p-10 bg-white-100 ml-64  transition-transform duration-300 ease-out transform  hover:translate-y-5   overflow-y-scroll scroll-smooth scrollbar-thin h-screen scrollbar-hide scroll-visible">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 mb-6 w-full"
              ref={index === boxes.length - 1 ? handleInfiniteScroll : null}
            >
              <h2 className="text-xl font-inter text-customGray mb-4">Box from {new Date(box.date).toLocaleDateString()}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {box.wines.map((wine: Wine, wineIndex: number) => (
                    <div key={wineIndex} className="flex flex-col items-center">
                      <Image src={wine.image} alt={wine.wine_name} width={80} height={80} className="rounded-lg shadow hover-scale-up" />
                      <div className="mt-2 text-center">
                        <h3 className="text-customPink font-semibold">{wine.wine_name}</h3>
                        <p className="text-sm text-customGray">{wine.area}</p>
                        <p className="text-sm text-customGray">{wine.store}</p>
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

          {isFetching && <p>Loading...</p>}
          {subscriptionLoading && <p>Loading Subscription Status...</p>}
          {boxHistoryError && <p>Error loading box history</p>}
          {subscriptionError && <p>Error loading subscription status</p>}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
