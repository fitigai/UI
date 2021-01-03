import React from 'react'
import PropTypes from 'prop-types'

import { StyledIcon } from './style'
import CheckIcon from './icons/Check'
import CrossIcon from './icons/Cross'
import ExclamationMarkIcon from './icons/ExclamationMark'
import InfoIcon from './icons/Info'
import { ICONS, ICON } from '../../utils/constants'

const getIconUrl = (name) =>
  ({
    [ICON.CHECK]: <CheckIcon />,
    [ICON.CROSS]: <CrossIcon />,
    [ICON.EXCLAMATION_MARK]: <ExclamationMarkIcon />,
    [ICON.INFO]: <InfoIcon />
  }[name])

const Icon = ({ name }) => <StyledIcon>{getIconUrl(name)}</StyledIcon>

Icon.propTypes = {
  name: PropTypes.oneOf(ICONS).isRequired
}

export default Icon
