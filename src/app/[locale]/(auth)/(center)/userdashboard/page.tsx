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
import Lenis from '@studio-freight/lenis';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';  // Correctly import Pagination module
import 'swiper/css';
import 'swiper/css/pagination';



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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  // Determine login status directly from token presence
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

  const { data: boxHistoryData, error: boxHistoryError, isFetching } = useGetBoxHistoryQuery(
    { page, limit: 4 },
    { skip: !isLoggedIn }
  );

  const [getSubscriptionStatus, { data: subscriptionStatusData, isLoading: subscriptionLoading, error: subscriptionError }] =
    useGetSubscriptionStatusMutation();

  const observer = useRef<IntersectionObserver | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    let lenis: Lenis | null = null;

    if (scrollRef.current) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function onRaf(time: number) {
        if (lenis) {
          lenis.raf(time);
        }
        requestAnimationFrame(onRaf);
      }

      requestAnimationFrame(onRaf);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  // Infinite scrolling observer
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

  // Handle subscription status
  useEffect(() => {
    if (subscriptionStatusData) {
      console.log('Subscription Status:', subscriptionStatusData);
    }
  }, [subscriptionStatusData]);

  // Update box data based on fetched history
  useEffect(() => {
    if (boxHistoryData) {
      const newBoxes = boxHistoryData?.data?.getBoxHistory?.boxes || [];
      const totalAvailableBoxes = boxHistoryData?.data?.getBoxHistory?.box_count || 0;

      if (newBoxes.length > 0) {
        setBoxes((prevBoxes) => {
          const updatedBoxes = [...prevBoxes, ...newBoxes];
          setHasMore(updatedBoxes.length < totalAvailableBoxes);
          return updatedBoxes;
        });
      } else {
        setHasMore(false);
        if (observer.current) observer.current.disconnect();
      }
    }

    if (boxHistoryError) {
      console.error('Error fetching box history:', boxHistoryError);
    }
  }, [boxHistoryData, boxHistoryError]);

  // Authentication check
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/sign-in');
    } else {
      getSubscriptionStatus({});
    }
  }, [isLoggedIn, router, getSubscriptionStatus]);

  // Render rating stars
  const renderStars = (rating: number) => (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-customPink" : "text-customGray"}>★</span>
      ))}
    </div>
  );
  return (
  <div className="flex min-h-screen" ref={scrollRef}>
    {/* Container for Sidebar and Main Content */}
    <div className="flex flex-grow w-full">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-50 h-full md:h-150 w-16 md:w-64 bg-white shadow-lg transform md:z-20 transition-all duration-300 ease-in-out"
      >
        <div className="flex flex-col ml-1 py-8 md:ml-9">
          <Image src={IMAGES.vineoLogo} alt="Vineo Logo" className="md:w-[100px] md:h-[40px]" width={60} height={32} />
        </div>

        <nav className="flex flex-col space-y-6 pl-2 md:px-4">
          <Link href="/profile" className="flex items-center md:px-4 hover:bg-gray-100 md:border-r-4 border-customPink">
            <GrHomeRounded className="mr-2 md:mr-4 text-customPink" size={19} />
            <span className="text-customPink font-inter font-bold hidden md:inline-block">Home</span>
          </Link>
          <Link href="/dashboard" className="flex items-center md:px-3 hover:bg-gray-100 rounded-lg">
            <Image src={IMAGES.virtualcellar} alt="Virtual Cellar" width={24} height={20} className="mr-2 md:mr-4" />
            <span className="text-customGray font-inter hidden md:inline-block">Virtual Cellar</span>
          </Link>
          <Link href="/subscription" className="flex items-center md:px-3 hover:bg-gray-100 rounded-lg">
            <CiStar className="mr-2 md:mr-4 text-customGray" size={25} />
            <span className="text-customGray font-inter hidden md:inline-block">Subscription</span>
          </Link>
          <Link href="/settings" className="flex items-center md:px-4 hover:bg-gray-100 rounded-lg">
            <SlSettings className="mr-2 md:mr-4 text-customGray" size={20} />
            <span className="text-customGray font-inter hidden md:inline-block">Settings</span>
          </Link>
          <Link href="/logout" className="flex items-center py-10 md:px-4 hover:bg-gray-100 rounded-lg">
            <LogoutIcon className="mr-2 md:mr-4 text-customGray" />
            <span className="text-customGray font-inter hidden md:inline-block">Logout</span>
          </Link>

          <div className="flex items-center md:px-3 py-4">
            <Image src={IMAGES.coins} alt="Vineo coins" width={40} height={45} className="mr-2 md:mr-4 md:w-30 md:h-40" />
            <div className="hidden md:block">
              <div className="font-inter text-customGray text-lg mb-1.5">Carlos Bernabeu</div>
              <div className="text-sm font-inter font-bold text-customGray">400 Vineo Coins</div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pl-10 p-6 ml-6 lg:p-10 bg-white-100 transition-all duration-300 scrollbar-rounded md:ml-60 w-full">
  {boxes.map((box, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 w-full" ref={index === boxes.length - 1 ? handleInfiniteScroll : null}>
      <h4 className="text-xl md:text-2xl lg:text-3xl font-inter text-customGray mb-4">Box from {new Date(box.date).toLocaleDateString()}</h4>
      <div className="flex flex-wrap lg:flex-nowrap gap-4 min-w-0 w-full">
        
        {/* Wine Data Box using Swiper for screens smaller than md */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-1 flex-grow w-full md:hidden">
          <Swiper 
            modules={[Pagination]}
            spaceBetween={16} 
            slidesPerView={1} // Default to 1 slide
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
            }}
            className="swiper-container mt-4 p-4"
            style={{ width: '100%' }} // Ensure Swiper respects the container's width
          >
            {box.wines.map((wine: Wine, wineIndex: number) => (
              <SwiperSlide key={wineIndex}>
                <div className="flex flex-col items-center">
                  <Image 
                    src={wine.image} 
                    alt={wine.wine_name} 
                    width={150} // Larger for scaling
                    height={150} 
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300 min-w-[100px] min-h-[100px]" 
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-customPink font-semibold text-base md:text-lg">{wine.wine_name}</h3>
                    <p className="text-sm md:text-base text-customGray">{wine.area}</p>
                    <p className="text-sm md:text-base text-customGray">{wine.store}</p>
                    <p>{renderStars(wine.rating)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Regular Flex Layout for screens md and above */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-1 flex-grow w-full hidden md:flex overflow-x-auto space-x-4 min-w-0">
          {box.wines.map((wine: Wine, wineIndex: number) => (
            <div key={wineIndex} className="flex flex-col items-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]">
              <Image 
                src={wine.image} 
                alt={wine.wine_name} 
                width={150} 
                height={150} 
                className="rounded-lg shadow hover:scale-105 transition-transform duration-300 min-w-[100px] min-h-[100px] max-w-full" 
              />
              <div className="mt-2 text-center">
                <h3 className="text-customPink font-semibold text-base md:text-lg lg:text-xl">{wine.wine_name}</h3>
                <p className="text-sm md:text-base text-customGray">{wine.area}</p>
                <p className="text-sm md:text-base text-customGray">{wine.store}</p>
                <p>{renderStars(wine.rating)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Graph Box */}
        <div className="bg-white shadow-md rounded-lg p-4 lg:w-auto w-full flex justify-center items-center lg:mt-0 mt-6 min-w-0 max-w-none">
          <Image src={IMAGES.graph} alt="Chart" width={250} height={350} className="max-w-full"/>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-customPink text-white px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-lg hover:bg-hoverPink text-base md:text-lg lg:text-xl">View Box Details</button>
      </div>
    </div>
  ))}
  {isFetching && <p>Loading...</p>}
  {subscriptionLoading && <p>Loading Subscription Status...</p>}
  {boxHistoryError && <p>Error loading box history</p>}
  {subscriptionError && <p>Error loading subscription status...</p>}
</main>




    </div>
  </div>
);

};

export default DashboardPage;
