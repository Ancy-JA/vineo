import React from 'react';

interface QuestionTitleProps {
  questionText: string;
  currentIndex: number;
}

const QuestionTitle: React.FC<QuestionTitleProps> = ({ questionText, currentIndex }) => (
  <div className="text-2xl md:text-3xl  font-inter text-center my-8 text-qnColor">
    {`${currentIndex + 1}. ${questionText}`}
  </div>
);

export default QuestionTitle;
