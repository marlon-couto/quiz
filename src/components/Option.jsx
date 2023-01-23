import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import '../assets/styles/Option.css';

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className="option"
      onClick={() => selectOption(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
