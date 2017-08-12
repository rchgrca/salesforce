import React from 'react'
import PropTypes from 'prop-types'

export const Exercise = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Exercise:</h2>
    <div style={{ display: 'none' }}>Counter: {counter}</div>
    <button className='btn btn-primary' onClick={increment} style={{ display: 'none' }}>Increment</button>
    <button className='btn btn-secondary' onClick={doubleAsync} style={{ display: 'none' }}>Double Increment</button>
  </div>
)
Exercise.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Exercise
