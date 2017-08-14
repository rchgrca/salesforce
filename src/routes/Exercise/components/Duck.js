import React from 'react'
import DuckImage from '../assets/duck.png'
import DoriImage from '../assets/dori.png'
import '../../Home/components/HomeView.scss'

export const Duck = ({ counter }) => {
  const imgSrc = counter.hasCollided ? DoriImage : DuckImage
  const x = counter.hasCollided ? 300 : 200
  return (
    <img className='duck' style={{ position: 'absolute', left: `${x}px` }} src={imgSrc} />
  )
}
export default Duck
