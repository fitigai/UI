import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeading } from './style'

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

Heading.propTypes = {
  children: PropTypes.any
}

Heading.defaultProps = {}

export default Heading
