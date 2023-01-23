import { createContext, useReducer } from 'react';
import questions from '../data/questions.js';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case 'REORDER_QUESTIONS':
      const reorderedQuestions = questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case 'CHANGE_QUESTION':
      const nextQuestion = state.currentQuestion + 1;
      const endgame = !questions[nextQuestion];

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endgame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };

    case 'NEW_GAME':
      return initialState;

    case 'CHECK_ANSWER':
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      /* TODO: corrigir a implementação da resposta certa. */
      const correctAnswer = answer === option;

      console.log(correctAnswer);
      console.log(state.score);

      return {
        ...state,
        score: correctAnswer ? state.score + 1 : state.score,
        answerSelected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
