import React from 'react';

interface OptionsSectionProps {
  options: any[];
  selectedOptionIndex: number | null;
  onOptionSelect: (index: number) => void;
}

const OptionsSection: React.FC<OptionsSectionProps> = ({ options, selectedOptionIndex, onOptionSelect }) => (
  <div className="flex flex-wrap justify-center items-center text-center gap-10 px-4 font-inter">
    {options.map((option, index) => (
      <div
        key={option.id}
        className={`cursor-pointer flex flex-col items-center  text-center px-4 py-6 rounded-xl shadow-all-sides-2xl transition-transform duration-300 active:shadow-optionCardShadow h-[20rem] w-[15rem] ${
          selectedOptionIndex === index
            ? 'bg-gradient-to-br from-[rgba(249,246,239,0)] via-[rgba(247,138,121,0.15)] to-[rgba(247,138,121,0.46)]'
            : 'bg-white'
        }`}
        onClick={() => onOptionSelect(index)} // Handle selection
        onMouseOver={(e) => {
          if (selectedOptionIndex !== index) {
            (e.currentTarget as HTMLElement).classList.add(
              'bg-gradient-to-br',
              'from-[rgba(249,246,239,0)]',
              'via-[rgba(247,138,121,0.15)]',
              'to-[rgba(247,138,121,0.46)]'
            );
          }
        }}
        onMouseOut={(e) => {
          if (selectedOptionIndex !== index) {
            (e.currentTarget as HTMLElement).classList.remove(
              'bg-gradient-to-br',
              'from-[rgba(249,246,239,0)]',
              'via-[rgba(247,138,121,0.15)]',
              'to-[rgba(247,138,121,0.46)]'
            );
          }
        }}
      >
        <div className="text-lg font-bold pb-4 p-2 text-optionHead">{option.option}</div>
        {option.description && <div className="text-md text-option p-2">{option.description}</div>}
      </div>
    ))}
  </div>
);

export default OptionsSection;
