import React from 'react';

interface NavigationButtonsProps {
  currentIndex: number;
  totalQuestions: number;
  selectedOptionIndex: number | null;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentIndex,
  totalQuestions,
  selectedOptionIndex,
  onPrevious,
  onNext,
  onSubmit,
}) => (
  <div className="flex flex-col items-center  gap-6">
    <div className="flex gap-8 mt-[4rem]">
      <button
        type="button"
        className={`text-4xl ${currentIndex > 0 ? 'text-customPink hover:text-darkPink' : 'text-gray-300 cursor-not-allowed'}`}
        aria-label="Previous Question"
        onClick={onPrevious}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      <button
        type="button"
        className={`text-4xl ${
          selectedOptionIndex !== null && currentIndex < totalQuestions - 1
            ? 'text-customPink hover:text-darkPink'
            : 'text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Next Question"
        onClick={onNext}
        disabled={selectedOptionIndex === null || currentIndex === totalQuestions - 1}
      >
        &gt;
      </button>
    </div>

    
  </div>
);

export default NavigationButtons;
