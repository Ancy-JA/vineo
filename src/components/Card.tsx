// SharedCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface SharedCardProps {
  title: string;
  subTitle?: string;
  amount: number;
  description: string[];
  isCurrent?: boolean;
  renewalDate?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const SharedCard: React.FC<SharedCardProps> = ({
  title,
  subTitle,
  amount,
  description,
  isCurrent = false,
  renewalDate,
  buttonText = 'Subscribe',
  onButtonClick,
}) => {
  const formattedRenewalDate = renewalDate
    ? new Date(renewalDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <div
      className={`shadow-xl flex flex-col pt-4 w-full rounded-lg overflow-hidden min-h-[400px] ${
        isCurrent ? 'bg-customPink' : 'bg-cardcolour'
      }`}
    >
      <div
        className={`text-xl font-bold text-center py-2 w-full ${
          isCurrent ? 'bg-black text-white' : 'bg-cardcolour text-customGray'
        }`}
      >
        {title}
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow rounded-b-lg">
        <p className={`text-xl font-semibold mb-1 ${isCurrent ? 'text-white' : 'text-black'}`}>
          {amount}€
        </p>
        {subTitle && <p className={`text-sm mb-2 ${isCurrent ? 'text-white' : 'text-gray-800'}`}>{subTitle}</p>}

        <ul className="text-sm mb-4">
          {description.map((item, index) => (
            <li key={index} className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: isCurrent ? 'white' : '#E5535D' }}
              />
              <span className={isCurrent ? 'text-white' : 'text-gray-700'}>{item}</span>
            </li>
          ))}
        </ul>

        {isCurrent && renewalDate ? (
          <p className="text-xs text-white italic text-center">Renewal Date: {formattedRenewalDate}</p>
        ) : (
          <button
            className="mt-4 w-3/4 bg-customGray text-white py-1.5 px-3 rounded mx-auto"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SharedCard;
