// ActionButtons.tsx
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaEye, FaCheck, FaTimes, FaEdit, FaTruck } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

interface ActionButtonsProps {
  onDownload: () => void;
  onView: () => void;
  phone: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDownload, onView, phone }) => {
  const { t } = useTranslation(); // Move the hook inside the component

  return (
    <div className="flex flex-wrap space-x-2 space-y-2">
      {/* Download Button */}
      <div className="relative group translate-y-2">
        <button className="bg-purple-500 text-white p-2 rounded-full" onClick={onDownload}>
          <BsDownload />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-purple-400 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.download')}
        </div>
      </div>

      {/* View Details Button */}
      <div className="relative group">
        <button className="bg-orange-500 text-white p-2 rounded-full" onClick={onView}>
          <FaEye />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-orange-400 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.details')}
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        <button className="bg-green-500 text-white p-2 rounded-full" onClick={() => window.open(`https://wa.me/${phone}`, '_blank')}>
          <AiOutlineWhatsApp />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-green-400 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.contact')}
        </div>
      </div>

      {/* Approve Button */}
      <div className="relative group">
        <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
          <FaCheck />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-gray-300 text-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.approve')}
        </div>
      </div>

      {/* Reject Button */}
      <div className="relative group">
        <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
          <FaTimes />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-gray-300 text-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.reject')}
        </div>
      </div>

      {/* Edit Button */}
      <div className="relative group">
        <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
          <FaEdit />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-gray-300 text-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.edit')}
        </div>
      </div>

      {/* Delivery Button */}
      <div className="relative group">
        <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
          <FaTruck />
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-gray-300 text-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {t('historyPage.delivery')}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
