import React from 'react'
import PropTypes from 'prop-types'
import NemoImage from '../assets/nemo.png'
import '../../Home/components/HomeView.scss'

export const Nemo = ({ counter }) => (
  <img className='duck' style={{ position: 'absolute', top: `${counter.y}px`, left: `${counter.x}px` }} src={NemoImage} />
)
export default Nemo
