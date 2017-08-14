import React from 'react'
import DuckImage from '../assets/duck.png'
import '../../Home/components/HomeView.scss'

export const Duck = () => (
  <img className='duck' style={{ position: 'absolute', left: '25%' }} src={DuckImage} />
)
export default Duck
