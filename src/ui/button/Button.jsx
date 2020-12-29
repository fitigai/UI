import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './style'
import { BUTTON_TYPES } from '../../utils/constants'

const Button = ({ children, type, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(BUTTON_TYPES)
}

Button.defaultProps = {}

export default Button
