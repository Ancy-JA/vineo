import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SharedCardProps } from './Types';



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
  className={`shadow-xl flex flex-col w-full  md:w-[360px] max-w-[360px] h-[520px] mx-auto  rounded-lg overflow-hidden ${
    isCurrent ? 'bg-customPink' : 'bg-white'
  }`}
>

      {/* Card Header */}
      <div
        className={`text-lg font-bold font-domine text-center mt-3 py-3 w-full ${
          isCurrent ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        {title}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col text-left justify-between font-inter flex-grow">
        <p className={`text-2xl font-domine font-semibold mb-2 ${isCurrent ? 'text-white' : 'text-black'}`}>
          {amount}€/mes
        </p>

        {subTitle && (
          <p className={`text-sm mb-4 ${isCurrent ? 'text-white' : 'text-gray-800'}`}>{subTitle}</p>
        )}

        <ul className="text-sm mb-6">
        {(description ?? []).map((item, index) => (

            <li key={index} className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheck}
                className="mr-2"
                style={{ color: isCurrent ? 'white' : '#E5535D' }}
              />
              <span className={isCurrent ? 'text-white' : 'text-gray-700'}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Conditional Rendering for Renewal Date or Button */}
        {isCurrent && renewalDate ? (
          <p className="text-xs text-white italic text-center">
            Renovación el: {formattedRenewalDate}
          </p>
        ) : (
          <button
            className="mt-4 w-full bg-black text-white py-2 mb-3 rounded-lg"
            onClick={onButtonClick}
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SharedCard;
