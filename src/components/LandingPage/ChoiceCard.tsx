import React from 'react';

interface ChoiceCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, description, isSelected = false, onClick }) => {
  return (
    <div
      className={`shadow-lg flex flex-col p-6 w-[250px] rounded-lg cursor-pointer transition-all duration-300 border-2 ${
        isSelected
          ? 'bg-gradient-to-br from-transparent via-[rgba(247,138,121,0.15)] to-[rgba(247,138,121,0.46)] border-transparent'
          : 'bg-white border-gray-300'
      } hover:bg-gradient-to-br hover:from-transparent hover:via-[rgba(247,138,121,0.15)] hover:to-[rgba(247,138,121,0.46)] hover:border-transparent`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2 text-[#232323]">
        {title}
      </h3>
      <p className={`text-sm ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
        {description}
      </p>
    </div>
  );
};

export default ChoiceCard;
