import React from 'react'
import PropTypes from 'prop-types'
import Nemo from './Nemo'
import Dori from './Dori'

export const Exercise = ({ counter, moveNemo }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Exercise:</h2>
    <input type='text' onKeyDown={moveNemo} />
    <div className='waterContainer' style={{ position: 'relative', height: '500px' }} >
      <Nemo counter={counter} />
      <Dori counter={counter} />
    </div>
  </div>
)

Exercise.propTypes = {
  counter: PropTypes.object,
  moveNemo: PropTypes.func,
}

export default Exercise
