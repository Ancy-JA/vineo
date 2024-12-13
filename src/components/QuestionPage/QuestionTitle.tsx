import React from 'react';

interface QuestionTitleProps {
  questionText: string;
  currentIndex: number;
}

const QuestionTitle: React.FC<QuestionTitleProps> = ({ questionText, currentIndex }) => (
  <div className="text-[1.87rem] md:text-[2.5rem]  font-domine text-center my-8 text-qnColor">
    {`${currentIndex + 1}. ${questionText}`}
  </div>
);

export default QuestionTitle;
