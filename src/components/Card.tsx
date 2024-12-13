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
  return (
    <div
      className={`shadow-all-sides-2xl flex flex-col w-full md:w-[19.5rem] max-w-[19.5rem] min-h-[30.5rem] mx-auto rounded-xl overflow-hidden ${isCurrent ? 'bg-card-gradient' : 'bg-white'
        }`}
    >
      {/* Card Header */}
      <div
        className={`text-3xl font-bold font-domine text-center mt-3 py-3 w-full ${isCurrent ? 'bg-cardBlack text-white' : 'bg-white text-customGray'
          }`}
      >
        Vineo Box
      </div>

      {/* Card Content */}
      <div className="p-6  flex flex-col text-left justify-between font-inter flex-grow">
        <div className='pl-8'>
          <div className={`text-3xl pb-3 font-domine font-semibold  ${isCurrent ? 'text-white' : 'text-customGray'}`}>
            {amount}€/mes
          </div>
          {/* Title below SubTitle */}
          {title && (
            <div
              className={`text-sm pb-5  ${isCurrent ? 'text-white' : 'text-gray-800'
                }`}
            >
              {title}
            </div>
          )}
          {subTitle && (
            <div className={`text-sm pb-8 ${isCurrent ? 'text-white' : 'text-gray-800'}`}>{subTitle}</div>
          )}

          <ul className="text-sm mb-6">
            {(description ?? []).map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2"
                  style={{ color: isCurrent ? 'white' : '#E5535D' }}
                />
                <div className={isCurrent ? 'text-white' : 'text-gray-700'}>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Conditional Rendering for Current State */}
        {isCurrent ? (
          renewalDate ? (
            <div className="text-xs text-white italic text-center">
              Renovación el: {new Date(renewalDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </div>
          ) : (
            <button
              className="mt-4 w-full md:w-[14.5rem] bg-white text-customGray py-3 mb-3 rounded-xl shadow-lg hover:opacity-90 mx-auto"
              onClick={onButtonClick}
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          )
        ) : (
          <button
            className="mt-4 w-full md:w-[14.5rem] bg-customPink text-white py-3 mb-3 rounded-xl hover:opacity-90 mx-auto"
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
