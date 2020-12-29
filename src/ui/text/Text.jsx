import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './style'

const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

Text.propTypes = {
  children: PropTypes.any
}

Text.defaultProps = {}

export default Text
