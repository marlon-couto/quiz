import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import quiz from '../img/quiz.svg'
import './Welcome.css'

const Welcome = () => {
  const [, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
        Iniciar
      </button>
      <img
        src={quiz}
        alt="Início do Quiz"
      />
    </div>
  )
}

export default Welcome
