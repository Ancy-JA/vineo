import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface SubscriptionCardProps {
  title: string;
  sub_title: string;
  amount: number;
  description: string[];
  is_current: boolean;
  renewalDate?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  sub_title,
  amount,
  description,
  is_current,
  renewalDate,
}) => {
  const { t } = useTranslation();

  // Format the renewal date in day/month/year format
  const formattedRenewalDate = renewalDate
    ? new Date(renewalDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })
    : '';

  return (
    <div
      className={`shadow-xl flex flex-col pt-4 w-full rounded-lg overflow-hidden min-h-[400px] ${is_current ? 'bg-customPink' : 'bg-cardcolour'
        }`}
    >
      <div
        className={`text-xl font-bold text-center py-2 w-full ${is_current ? 'bg-black text-white' : 'bg-cardcolour text-customGray'
          }`}
      >
        {title}
      </div>

      <div className="p-4 flex flex-col  justify-between flex-grow rounded-b-lg">
        <p className={`text-xl font-domine font-semibold mb-1 ${is_current ? 'text-white' : 'text-black'}`}>
          {amount}€/ {t('month')}
        </p>
        <p className={`text-sm mb-2 ${is_current ? 'text-white' : 'text-gray-800'}`}>{sub_title}</p>

        <ul className="text-sm mb-4">
          {description.map((item, index) => (
            <li key={index} className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: is_current ? 'white' : '#E5535D' }} 
              />
              <span className={is_current ? 'text-white' : 'text-gray-700'}>{item}</span>
            </li>
          ))}
        </ul>



        {/* Subscription Button or Renewal Date */}
        {is_current && renewalDate ? (
          <div className="mt-auto">
            <p className="text-xs text-white font-inter italic mt-2 text-center">
              Renewal Date: {formattedRenewalDate}
            </p>
          </div>
        ) : (
          <button className="mt-4 w-3/4 bg-customGray font-domine text-white py-1.5 px-3 rounded mx-auto">
            {t('subscribe')}
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
