import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Option from './Option';

import '../assets/styles/Question.css';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      
      <h2>{currentQuestion.question}</h2>
      <div id="options_container">
        {currentQuestion.options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </div>
      
      <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
        Continuar
      </button>
    </div>
  );
};

export default Question;
