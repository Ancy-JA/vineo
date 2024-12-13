'use client';
import React, { useState } from 'react';
import { IMAGES } from '@/app/constants/imageconstants';
import Logo from '@/components/QuestionPage/Logo';
import ProgressBar from '@/components/QuestionPage/ProgressBar';
import QuestionTitle from '@/components/QuestionPage/QuestionTitle';
import QuestionImage from '@/components/QuestionPage/QuestionImage';
import OptionsSection from '@/components/QuestionPage/OptionsSection';
import NavigationButtons from '@/components/QuestionPage/NavigationButtons';
import { useGetQuestionsQuery } from '@/app/redux/authApi';
import { useRouter } from 'next/navigation'; // Import useRouter

const CoffeeChoicePage: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const { data, error, isLoading } = useGetQuestionsQuery(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);

  if (isLoading || !data) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen">Error loading questions</div>;

  const questions = data.data.getQuestions || [];
  if (questions.length === 0) return <div className="flex items-center justify-center min-h-screen">No questions available</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOptionIndex = selectedAnswers[currentQuestionIndex] || null;
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // Navigate to another page after survey completion
        router.push('./congratulations'); 
      }
    }, 300); // 300ms delay
  };

  const handlePrevious = () => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    selectedOptionIndex !== null && setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  const handleSubmit = () => router.push('./congratulations'); // Redirect on submit

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`, // Background image from constants
      }}
    >
      {/* Fixed container width */}
      <div className="relative max-w-[1728px] w-full flex flex-col items-center">
        <Logo />
        <div className="flex flex-col items-center w-full mt-[6rem] md:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] 2xl:mt-[12rem]">
          <ProgressBar progressPercentage={progressPercentage} />
          <QuestionTitle questionText={currentQuestion.question} currentIndex={currentQuestionIndex} />
          <QuestionImage />
          <OptionsSection
            options={currentQuestion.options}
            selectedOptionIndex={selectedOptionIndex}
            onOptionSelect={handleOptionSelect}
          />
          <NavigationButtons
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedOptionIndex={selectedOptionIndex}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeChoicePage;
