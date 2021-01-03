/**
 * https://evergreen.segment.com/components/avatar
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as AvatarUI } from 'evergreen-ui'

const Avatar = ({ ...props }) => <AvatarUI {...props} />

Avatar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string
}

Avatar.defaultProps = {
  size: 40
}

export default Avatar
