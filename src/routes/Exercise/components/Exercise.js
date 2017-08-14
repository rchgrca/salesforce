import React from 'react'
import PropTypes from 'prop-types'
import Duck from './Duck'
import Nemo from './Nemo'

export const Exercise = ({ counter = { x:0, y:0 }, moveNemo }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Exercise:</h2>
    <input type='text' onKeyDown={moveNemo} />
    <div className='waterContainer' style={{ position: 'relative', height: '500px' }} >
      <Nemo counter={counter} />
      <Duck />
    </div>
  </div>
)

Exercise.propTypes = {
  counter: PropTypes.object,
  moveNemo: PropTypes.func,
}

export default Exercise
