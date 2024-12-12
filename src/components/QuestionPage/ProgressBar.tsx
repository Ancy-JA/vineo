import React from 'react';

interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercentage }) => (
  <div className="w-full md:mt-[5rem] mb-7 h-2 bg-gray-200">
    <div
      className="h-full transition-all duration-300"
      style={{
        width: `${progressPercentage}%`,
        background: 'linear-gradient(90deg, #F78A79 16.31%, #E86A58 91.85%)',
      }}
    />
  </div>
);

export default ProgressBar;
