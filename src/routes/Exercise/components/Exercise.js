import React from 'react'
import PropTypes from 'prop-types'
import Nemo from './Nemo'
import Dori from './Dori'

export const Exercise = ({ counter, moveNemo }) => {
  window.addEventListener('keydown', moveNemo)
  return (
    <div className='exerciseContainer' >
      <h2>Exercise:</h2>
      <div className='waterContainer'>
        <Nemo counter={counter} />
        <Dori counter={counter} />
      </div>
    </div>
  )
}

Exercise.propTypes = {
  counter: PropTypes.object,
  moveNemo: PropTypes.func,
}

export default Exercise
