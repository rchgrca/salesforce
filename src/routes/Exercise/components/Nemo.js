import React from 'react'
import PropTypes from 'prop-types'
import NemoImg from '../assets/nemo.png'
import './ExerciseView.scss'

export const Nemo = ({ counter }) => (
  <img className='nemo' style={{ top: `${counter.y}px`, left: `${counter.x}px` }} src={NemoImg} />
)

Nemo.propTypes = {
  counter: PropTypes.object
}

export default Nemo
