import React from 'react'
import DuckImage from '../../Home/assets/Duck.jpg'
import '../../Home/components/HomeView.scss'

export const Duck = () => (
  <img className='duck' style={{ position: 'absolute', left: '50%' }} src={DuckImage} />
)
export default Duck
