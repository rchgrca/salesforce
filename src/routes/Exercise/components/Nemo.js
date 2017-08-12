import React from 'react'
import PropTypes from 'prop-types'
import NemoImage from '../assets/nemo.png'
import '../../Home/components/HomeView.scss'

export const Nemo = ({ alt }) => (
  <img alt='I am Nemo!' className='duck' style={{ position: 'static' }} src={NemoImage} />
)
export default Nemo
