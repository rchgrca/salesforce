import React from 'react'
import PropTypes from 'prop-types'
import DuckImage from '../../Home/assets/Duck.jpg'
import '../../Home/components/HomeView.scss'

export const Duck = ({ alt }) => (
  <img alt='This is a duck component!' className='duck' style={{ position: 'absolute' }} src={DuckImage} />
)
export default Duck
