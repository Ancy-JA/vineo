import React from 'react';

interface OptionsSectionProps {
  options: any[];
  selectedOptionIndex: number | null;
  onOptionSelect: (index: number) => void;
}

const OptionsSection: React.FC<OptionsSectionProps> = ({ options, selectedOptionIndex, onOptionSelect }) => (
  <div className="flex flex-wrap justify-center items-center text-center gap-10 px-4">
    {options.map((option, index) => (
      <div
        key={option.id}
        className={`cursor-pointer flex flex-col items-center  text-center px-4 py-6 rounded-3xl  transition-transform duration-300  h-[21rem] w-[20rem] ${
          selectedOptionIndex === index
            ? 'bg-selectedOptiongradient shadow-optionCardShadow backdrop-blur-lg'
            : 'bg-unselectedOptiongradient border-customGray border backdrop-blur-xs'
        }`}
        onClick={() => onOptionSelect(index)} // Handle selection
        
      >
        <div className="text-[1.5rem] font-bold font-domine pb-4 p-2 text-optionHead">{option.option}</div>
        {option.description && <div className="text-[1.2rem] text-option p-2 font-inter">{option.description}</div>}
      </div>
    ))}
  </div>
);

export default OptionsSection;
