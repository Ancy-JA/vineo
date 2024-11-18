import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SharedCard from 'src/components/Card';

interface CardListProps {
  items: Array<{
    id: string;
    title: string;
    subTitle?: string;
    amount: number;
    description: string[];
    isCurrent?: boolean;
    renewalDate?: string;
    buttonText?: string;
  }>;
}

const CARD_WIDTH = 360; // Adjust this based on your actual card width
const CARD_GAP = 16; // Adjust this based on the gap between cards

const CardList: React.FC<CardListProps> = ({ items }) => {
  const [useCenteredLayout, setUseCenteredLayout] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to check if all cards fit within the container width
  const checkFit = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const totalCardsWidth = items.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;

    // If total card width fits within the container width, use centered layout
    setUseCenteredLayout(totalCardsWidth <= containerWidth);
  };

  // Listen for resize events and check card fit
  useEffect(() => {
    checkFit();
    window.addEventListener('resize', checkFit);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkFit);
  }, [items.length]);

  // Render flex container if all cards fit within the container
  if (useCenteredLayout) {
    return (
      <div ref={containerRef} className="flex justify-center gap-6 mx-auto max-w-[1600px] px-4">
        {items.map((item) => (
          <div key={item.id} className="flex">
            <SharedCard {...item} />
          </div>
        ))}
      </div>
    );
  }

  // Render Swiper if cards don't fit within the container
  return (
    <div ref={containerRef}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={CARD_GAP}
        pagination={{ clickable: true }}
        breakpoints={{
          550: { slidesPerView: 1 },
          1074: { slidesPerView: 2 },
          1443: { slidesPerView: 3 },
         
        }}
        className="w-full h-auto"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="flex">
            <SharedCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
