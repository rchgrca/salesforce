import React from 'react'
import DoriImage from '../assets/dori.png'
import './ExerciseView.scss'

export const Dori = ({ counter: { x, y, hasCollided } }) => {
  const xCoord = hasCollided ? x + 300 : '300px'
  return (
    <img className='dori' style={{ left: `${xCoord}px` }} src={DoriImage} />
  )
}
export default Dori
