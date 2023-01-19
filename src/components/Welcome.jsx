import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import quiz from '../assets/img/quiz.svg';
import '../assets/styles/Welcome.css';

const Welcome = () => {
  const quizState = 
  
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img
        src={quiz}
        alt="Início do Quiz"
      />
    </div>
  );
};

export default Welcome;
