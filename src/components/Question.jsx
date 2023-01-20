import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return <div>Question</div>;
};

export default Question;
