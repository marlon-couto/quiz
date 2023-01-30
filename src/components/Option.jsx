import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Option.css'

const Option = ({ option, selectOption, answer }) => {
  const [quizState] = useContext(QuizContext)

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      } ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`}
      onClick={() => selectOption(option)}
    >
      <p>{option}</p>
    </div>
  )
}

Option.propTypes = {
  answer: PropTypes.string,
  option: PropTypes.string,
  selectOption: PropTypes.func
}.isRequired

export default Option
