'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type Subscription = {
  _id: string;
  title: string;
  sub_title: string;
  amount: number;
  description: string;
  features: string[];
  is_current: boolean;
  renewalDate?: string;
};

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();

  const subscriptions: Subscription[] = [
    {
      _id: '1',
      title: t('subscriptions.vineoGift.title'),
      sub_title: t('subscriptions.vineoGift.subTitle'),
      amount: 0,
      description: t('subscriptions.vineoGift.description'),
      features: t('subscriptions.vineoGift.features', { returnObjects: true }) as string[],
      is_current: true,
      renewalDate: '27/04/2024'
    },
    {
      _id: '2',
      title: t('subscriptions.vineoFree.title'),
      sub_title: t('subscriptions.vineoFree.subTitle'),
      amount: 0,
      description: t('subscriptions.vineoFree.description'),
      features: t('subscriptions.vineoFree.features', { returnObjects: true }) as string[],
      is_current: false
    },
    {
      _id: '3',
      title: t('subscriptions.vineoAI.title'),
      sub_title: t('subscriptions.vineoAI.subTitle'),
      amount: 5,
      description: t('subscriptions.vineoAI.description'),
      features: t('subscriptions.vineoAI.features', { returnObjects: true }) as string[],
      is_current: false,
      renewalDate: '27/04/2024'
    },
    {
      _id: '4',
      title: t('subscriptions.vineoBox.title'),
      sub_title: t('subscriptions.vineoBox.subTitle'),
      amount: 55,
      description: t('subscriptions.vineoBox.description'),
      features: t('subscriptions.vineoBox.features', { returnObjects: true }) as string[],
      is_current: false
    },
  ];

  return (
    <div className="min-h-screen p-3 flex flex-col items-center border-t rounded-lg  shadow-lg">
      <h2 className="text-2xl font-inter mb-8 p-3 text-left w-full">{t('subscriptionTitle')}</h2>

      <div className="max-w-8xl w-full flex-grow relative">
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
            <SwiperSlide key={subscription._id} className="flex">
              <div className="shadow-lg flex flex-col w-full rounded-lg overflow-hidden bg-white min-h-[400px]">

                {/* Title Row */}
                <div
                  className={`text-xl font-bold text-center py-2 w-full ${subscription.is_current ? 'bg-black text-white' : 'bg-gray-200 text-customGray'
                    }`}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                >
                  {subscription.title}
                </div>

                {/* Main Content Section */}
                <div
                  className={`p-4 flex flex-col justify-between flex-grow ${subscription.is_current ? 'bg-custom-gradient' : 'bg-white'
                    } rounded-b-lg`}
                  style={{
                    borderRadius: '0 0 10px 10px',
                    borderTop: subscription.is_current ? '4px solid #2D3748' : '4px solid transparent',
                  }}
                >
                  <div>
                    <p className={`text-xl font-semibold ${subscription.is_current ? 'text-white' : 'text-gray-800'} mb-1`}>
                      {subscription.amount}€/ {t('month')}
                    </p>
                    <p className={`${subscription.is_current ? 'text-white' : 'text-customGray'} mb-2`}>
                      {subscription.sub_title}
                    </p>
                    <p className={`text-sm ${subscription.is_current ? 'text-white' : 'text-customGray'} mb-2`}>
                      {subscription.description}
                    </p>
                    <ul className={`text-sm ${subscription.is_current ? 'text-white' : 'text-customGray'} mb-3 space-y-1`}>
                      {Array.isArray(subscription.features) &&
                        subscription.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className={`${subscription.is_current ? 'text-white' : 'text-red-500'} mr-2`} aria-hidden="true">
                              <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.485 1.929a1.5 1.5 0 0 1 0 2.122l-7.072 7.072a1.5 1.5 0 0 1-2.121 0L.515 8.93a1.5 1.5 0 1 1 2.122-2.122l2.086 2.086 6.364-6.364a1.5 1.5 0 0 1 2.122 0z" />
                              </svg>
                            </span>
                            {feature}
                          </li>

                        ))}
                    </ul>
                  </div>
                  {subscription.is_current && subscription.renewalDate && (
                    <p className="text-xs text-white text-center italic mt-2">
                      {t('renewalDate', { date: subscription.renewalDate })}
                    </p>
                  )}
                  {!subscription.is_current && (
                    <button className="mt-4 w-3/4 bg-customGray text-white py-1.5 px-3 rounded mx-auto">
                      {t('subscribe')}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>



      {subscriptions.some((sub) => sub.is_current) && (
        <button className="mt-8 mb-10 mr-4 bg-cancelbackground text-substext font-bold py-2 px-4 rounded self-end">
          {t('cancelSubscription')}
        </button>
      )}
    </div>
  );
};

export default SubscriptionPage;
