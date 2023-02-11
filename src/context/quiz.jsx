import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
// TODO: trocar esse arquivo pelo arquivo de questões completo
import questions from '../data/questions.js'

const STAGES = ['Start', 'Playing', 'End']

const CHANGE_QUESTION = 'CHANGE_QUESTION'
const CHANGE_STATE = 'CHANGE_STATE'
const CHECK_ANSWER = 'CHECK_ANSWER'
const NEW_GAME = 'NEW_GAME'
const REORDER_QUESTIONS = 'REORDER_QUESTIONS'

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false
}

const randomSort = (array) => array.sort(() => Math.random() - 0.5)

const quizReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_STATE: {
      return {
        ...state,
        gameStage: STAGES[1]
      }
    }

    case REORDER_QUESTIONS: {
      const reorderedQuestions = randomSort(questions)

      return {
        ...state,
        questions: reorderedQuestions
      }
    }

    case CHANGE_QUESTION: {
      const nextQuestion = state.currentQuestion + 1
      const endgame = !questions[nextQuestion]

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endgame ? STAGES[2] : state.gameStage,
        answerSelected: false
      }
    }

    case NEW_GAME: {
      return initialState
    }

    case CHECK_ANSWER: {
      if (state.answerSelected) return state

      const answer = payload.answer
      const option = payload.option

      const correctAnswer = answer === option

      return {
        ...state,
        score: correctAnswer ? state.score + 1 : state.score,
        answerSelected: option
      }
    }

    default:
      return state
  }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState)
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

QuizProvider.propTypes = {
  children: PropTypes.node
}.isRequired
// TODO: adicionar dicas, pontuação baseada na dificuldade das questões, etc
