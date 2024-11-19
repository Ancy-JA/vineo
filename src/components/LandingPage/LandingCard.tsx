import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SharedCard from 'src/components/Card';
import { SharedCardProps } from 'src/components/Types';

interface LandingCardProps {
  items: SharedCardProps[];
}

const CARD_GAP = 16;

const LandingCard: React.FC<LandingCardProps> = ({ items }) => {
  const [useFlexLayout, setUseFlexLayout] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine if we should use flex layout instead of Swiper
  const checkLayout = () => {
    const isLargeScreen = window.innerWidth >= 900;
    const isFewCards = items.length <= 2;
    setUseFlexLayout(isLargeScreen && isFewCards);
  };

  // Listen for resize events and check layout
  useEffect(() => {
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, [items.length]);

  // Flex layout for large screens with 2 or fewer cards
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

  // Swiper layout for smaller screens or when there are more than 2 cards
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={CARD_GAP}
        pagination={{ clickable: true }}
        slidesPerView={1}
        observer={true}
        observeParents={true}
        resizeObserver={true}
        breakpoints={{
         
          600: { slidesPerView: 1 },
          800:{ slidesPerView: 1 },
          900: { slidesPerView: 2 },
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
