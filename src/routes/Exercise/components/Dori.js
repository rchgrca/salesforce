import React from 'react'
import DoriImage from '../assets/dori.png'
import './ExerciseView.scss'

export const Duck = ({ counter }) => {
  const x = counter.hasCollided ? 300 : 200
  return (
    <img className='dori' style={{ position: 'absolute', left: `${x}px` }} src={DoriImage} />
  )
}
export default Duck
