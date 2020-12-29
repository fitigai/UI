import React from 'react'
import PropTypes from 'prop-types'

import { StyledLogo } from './style'
import logoURL from '../../assets/images/logo.svg'

const Logo = ({ alt }) => {
  return (
    <StyledLogo>
      <img src={logoURL} alt={alt} />
    </StyledLogo>
  )
}

Logo.propTypes = {
  children: PropTypes.string
}

Logo.defaultProps = {
  alt: 'Fitigai logo'
}

export default Logo
