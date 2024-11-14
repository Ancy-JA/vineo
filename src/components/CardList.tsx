import React from 'react';
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

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={16}
      pagination={{ clickable: true }}
      breakpoints={{
        550: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full h-auto"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="flex">
          <SharedCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardList;
