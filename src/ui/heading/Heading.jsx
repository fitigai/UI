import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeading } from './style'
import { SIZES, SIZE } from '../../utils/constants'

const Heading = ({ size, children }) => {
  return <StyledHeading size={size}>{children}</StyledHeading>
}

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(SIZES)
}

Heading.defaultProps = {
  size: SIZE.M
}

export default Heading
