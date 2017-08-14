import React from 'react'
import PropTypes from 'prop-types'
import Duck from './Duck'
import Nemo from './Nemo'

export const Exercise = ({ counter, increment, doubleAsync, moveNemo }) => {


  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Exercise:</h2>
      <input type="text" onKeyDown={moveNemo}/>
      <div className='waterContainer' style={{ position: 'relative', border: '1px solid red', height: '500px'}}>
        <Nemo/>
        <Duck/>
      </div>
    </div>
  )
}

Exercise.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Exercise
