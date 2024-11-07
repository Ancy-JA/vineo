import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SubscriptionCard from './SubscriptionCard';

interface Subscription {
  _id: string;
  title: string;
  sub_title: string;
  amount: number;
  description: string;
  is_current: boolean;
}

interface SubscriptionListProps {
  subscriptions: Subscription[];
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ subscriptions }) => {
  return (
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      breakpoints={{
        580: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {subscriptions.map((subscription) => (
        <SwiperSlide key={subscription._id} className="flex">
          <SubscriptionCard {...subscription} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SubscriptionList;
