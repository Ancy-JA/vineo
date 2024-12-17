import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SharedCard from '@/components/Molecules/Card';
import { SharedCardProps } from 'src/components/Types';

interface LandingCardProps {
  items: SharedCardProps[];
}

const LandingCard: React.FC<LandingCardProps> = ({ items }) => {
  const [useFlexLayout, setUseFlexLayout] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkLayout = () => {
    const isLargeScreen = window.innerWidth >= 900;
    const isFewCards = items.length <= 2;
    setUseFlexLayout(isLargeScreen && isFewCards);
  };

  useEffect(() => {
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, [items.length]);

  if (useFlexLayout) {
    return (
      <div ref={containerRef} className="flex justify-center gap-6 mx-auto max-w-[1440px] px-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex">
            <SharedCard {...item} isCurrent={index === 0} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full max-w-screen  overflow-x-hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
    
        breakpoints={{
          0: { slidesPerView: 1 },
          768:{slidesPerView: 1},
          1024: { slidesPerView: 2 },
        }}
        className="w-full h-auto"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <SharedCard {...item} isCurrent={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingCard;
