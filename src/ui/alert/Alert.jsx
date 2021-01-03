import React from 'react'
import PropTypes from 'prop-types'

import { getColorByType, StyledAlert, StyledLeft, StyledRight } from './style'
import Heading from '../heading'
import Text from '../text'
import Icon from '../icon'
import { ALERT_TYPES, ALERT_TYPE, SIZE } from '../../utils/constants'

const Alert = ({ type, title, description }) => {
  return (
    <StyledAlert type={type}>
      <StyledLeft>
        <Icon name='check' color={getColorByType(type)} />
      </StyledLeft>
      <StyledRight>
        <Heading size={SIZE.XS}>{title}</Heading>
        {description && <Text>{description}</Text>}
      </StyledRight>
    </StyledAlert>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(ALERT_TYPES),
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

Alert.defaultProps = {
  type: ALERT_TYPE.SUCCESS
}

export default Alert
