'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } from '@/app/redux/authApi';
import { IMAGES } from '../../../../constants/imageconstants';
import Lenis from '@studio-freight/lenis';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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

  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

  

  const { data: boxHistoryData, error: boxHistoryError, isFetching } = useGetBoxHistoryQuery(
    { page, limit: 4 },
    { skip: !isLoggedIn }
  );

  const [getSubscriptionStatus, { data: subscriptionStatusData, isLoading: subscriptionLoading, error: subscriptionError }] =
    useGetSubscriptionStatusMutation();

  const observer = useRef<IntersectionObserver | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Smooth Scrolling Initialization (Retained)
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

  // Updated Infinite Scroll Observer from GitHub code
  const lastBoxElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching || !hasMore) return; // Prevent multiple calls if already fetching or no more boxes

      if (observer.current) observer.current.disconnect(); // Disconnect previous observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setPage((prevPage) => prevPage + 1); // Fetch the next page
        }
      });

      if (node) observer.current.observe(node); // Attach the observer to the last box element
    },
    [isFetching, hasMore]
  );

  // Subscription Status Handling (Unchanged)
  useEffect(() => {
    if (subscriptionStatusData) {
      console.log('Subscription Status:', subscriptionStatusData);
    }
  }, [subscriptionStatusData]);

  // Update Box Data Based on Fetched History (Adjusted Logic from GitHub)
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

  // Authentication Check (Unchanged)
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/sign-in');
    } else {
      getSubscriptionStatus({});
    }
  }, [isLoggedIn, router, getSubscriptionStatus]);
  console.log(boxHistoryData);
  const renderStars = (rating: number) => (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-customPink" : "text-customGray"}>★</span>
      ))}
    </div>
  );
  return (
    <div className="flex min-h-screen" ref={scrollRef}>
      
        {/* Main Content */}
        <main className="flex-grow flex ">
          {boxes.map((box, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 w-full overflow-hidden" ref={index === boxes.length - 1 ? lastBoxElementRef : null}>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-inter text-customGray mb-4">Box from {new Date(box.date).toLocaleDateString()}</h4>

              {/* Flex Container with Default Row Layout on Larger Screens */}
              <div className="flex flex-col lg:flex-row gap-4 min-w-0 w-full overflow-hidden">

                {/* Swiper Component (Visible only below lg) */}
                <div className="bg-white shadow-md rounded-lg p-4 flex-1 flex-grow w-full lg:hidden overflow-hidden">
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

                {/* Regular Flex Layout (Visible only lg and above) */}
                <div className="bg-white shadow-md rounded-lg p-4 flex-1 flex-grow w-full hidden lg:flex overflow-x-auto space-x-4 min-w-0">
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

                {/* Graph Box - Visible only on 2xl screens */}
                <div className="bg-white shadow-md rounded-lg p-4 lg:w-auto w-full  justify-center items-center hidden 2xl:flex min-w-0 max-w-none">
                  <Image src={IMAGES.graph} alt="Chart" width={250} height={350} className="max-w-full" />
                </div>
              </div>

              {/* Graph Box - Visible on xl and smaller */}
              <div className="bg-white shadow-md rounded-lg p-4 lg:w-auto w-full flex justify-center items-center mt-6 2xl:hidden min-w-0 max-w-none">
                <Image src={IMAGES.graph} alt="Chart" width={250} height={350} className="max-w-full" />
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
  );

};

export default DashboardPage;
