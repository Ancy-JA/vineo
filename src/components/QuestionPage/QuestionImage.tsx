import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';

const QuestionImage: React.FC = () => (
  <div className="mb-[4rem] mt-[2rem]">
    <Image
      src={IMAGES.qn}
      alt="Question Illustration"
      width={150}
      height={150}
      className="mx-auto"
    />
  </div>
);

export default QuestionImage;
