'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();

  // Static subscription data with translated text
  const subscriptions = [
    {
      _id: '1',
      title: t('subscriptions.vineoGift.title'),
      sub_title: t('subscriptions.vineoGift.subTitle'),
      amount: 0,
      description: t('subscriptions.vineoGift.description'),
      features: t('subscriptions.vineoGift.features', { returnObjects: true }),
      is_current: true,
      renewalDate: '27/04/2024'
    },
    {
      _id: '2',
      title: t('subscriptions.vineoFree.title'),
      sub_title: t('subscriptions.vineoFree.subTitle'),
      amount: 0,
      description: t('subscriptions.vineoFree.description'),
      features: t('subscriptions.vineoFree.features', { returnObjects: true }),
      is_current: false
    },
    {
      _id: '3',
      title: t('subscriptions.vineoAI.title'),
      sub_title: t('subscriptions.vineoAI.subTitle'),
      amount: 5,
      description: t('subscriptions.vineoAI.description'),
      features: t('subscriptions.vineoAI.features', { returnObjects: true }),
      is_current: false,
      renewalDate: '27/04/2024'
    },
    {
      _id: '4',
      title: t('subscriptions.vineoBox.title'),
      sub_title: t('subscriptions.vineoBox.subTitle'),
      amount: 55,
      description: t('subscriptions.vineoBox.description'),
      features: t('subscriptions.vineoBox.features', { returnObjects: true }),
      is_current: false
    },
  ];

  return (
    <div className="min-h-screen p-8 flex justify-center items-center bg-gray-50">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('subscriptionTitle')}</h2>
        <Swiper
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {subscriptions.map((subscription) => (
            <SwiperSlide key={subscription._id}>
              <div
                className={`p-6 rounded-lg shadow-lg ${
                  subscription.is_current ? 'bg-red-200' : 'bg-white'
                }`}
                style={{
                  borderTop: subscription.is_current ? '4px solid #2D3748' : '4px solid transparent',
                  borderRadius: '10px'
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-1">{subscription.title}</h3>
                <p className="text-2xl font-semibold text-gray-800">{subscription.amount}€/mes</p>
                <p className="text-gray-500 mb-4">{subscription.sub_title}</p>
                <p className="text-sm text-gray-600 mb-4">{subscription.description}</p>
                <ul className="text-sm text-gray-700 mb-4">
                  {subscription.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="text-red-500 mr-2">✔</span>{feature}
                    </li>
                  ))}
                </ul>
                {subscription.renewalDate && (
                  <p className="text-xs text-gray-600 italic mt-2">
                    {t('renewalDate', { date: subscription.renewalDate })}
                  </p>
                )}
                {subscription.is_current ? (
                  <button className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded">
                    {t('cancelSubscription')}
                  </button>
                ) : (
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
                    {t('subscribe')}
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubscriptionPage;
