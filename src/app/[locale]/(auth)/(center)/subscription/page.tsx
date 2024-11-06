'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoadSubscriptionListForUserQuery } from '@/app/redux/authApi';
import 'swiper/css';
import 'swiper/css/pagination';

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();

  const { data, error, isLoading } = useLoadSubscriptionListForUserQuery({
    type: [10, 40, 30],
  });

  console.log('Subscription data:', data); // Keep this for debugging

  if (isLoading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('errorLoadingSubscriptions')}</p>;

  return (
    <div className="min-h-screen p-3 flex flex-col items-center border-t rounded-lg shadow-lg">
      <h2 className="text-2xl font-inter mb-8 p-3 text-left w-full">{t('subscriptionTitle')}</h2>

      <div className="max-w-8xl w-full flex-grow relative">
        <Swiper
          spaceBetween={16}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {data?.data?.loadSubscriptionListForUser ? (
            data.data.loadSubscriptionListForUser.map((subscription: {
              _id: string;
              title: string;
              sub_title: string;
              amount: number;
              description: string;
              is_current: boolean;
            }) => (
              <SwiperSlide key={subscription._id} className="flex">
                <div
                  className={`shadow-lg flex flex-col pt-5 w-full rounded-lg overflow-hidden min-h-[400px] ${
                    subscription.is_current ? 'bg-customPink' : 'bg-white'
                  }`}
                >
                  <div
                    className={`text-xl font-bold text-center py-2 w-full ${
                      subscription.is_current ? 'bg-black text-white' : 'bg-white text-customGray'
                    }`}
                  >
                    {subscription.title}
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow rounded-b-lg">
                    <p className="text-xl font-semibold mb-1">
                      {subscription.amount}€/ {t('month')}
                    </p>
                    <p className="text-sm mb-2">{subscription.sub_title}</p>
                    <p className="text-sm mb-2">{subscription.description}</p>
                    {subscription.is_current ? (
                      <button className="mt-8 mb-10 mr-4 bg-cancelbackground text-substext font-bold py-2 px-4 rounded self-end">
                        {t('cancelSubscription')}
                      </button>
                    ) : (
                      <button className="mt-4 w-3/4 bg-customGray text-white py-1.5 px-3 rounded mx-auto">
                        {t('subscribe')}
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>{t('noSubscriptionData')}</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SubscriptionPage;
