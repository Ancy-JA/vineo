// SwiperCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import type { Wine } from '../Types';

interface SwiperCarouselProps {
  wines: Wine[];
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ wines }) => (
  <Swiper
    modules={[Pagination]}
    spaceBetween={16}
    pagination={{ clickable: true }}
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="swiper-container w-full"
  >
    {wines.map((wine, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center">
          <Image src={wine.image} alt={wine.wine_name} width={150} height={150} className="rounded-lg shadow" />
          <div className="mt-2 text-center">
            <div className="text-customPink font-semibold">{wine.wine_name}</div>
            <div className="text-sm text-customGray">{wine.area}</div>
            <div className="text-sm text-customGray">{wine.store}</div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperCarousel;
