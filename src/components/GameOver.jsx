import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import wellDone from '../img/welldone.svg'
import './GameOver.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="game-over">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>

      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{' '}
        perguntas.
      </p>

      <img src={wellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
    </div>
  )
}

export default GameOver

// TODO: adicionar pontuação com base na dificuldade da pergunta.
