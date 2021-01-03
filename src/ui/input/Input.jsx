import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledInputContainer, StyledInput } from './style'
import { INPUT_TYPES, INPUT_TYPE } from '../../utils/constants'

const Input = ({ type, ...props }) => {
  const InputTag = type === INPUT_TYPE.TEXTAREA ? 'textarea' : 'input'
  const [isActive, setIsActive] = useState(false)

  return (
    <StyledInputContainer isActive={isActive}>
      <StyledInput
        as={InputTag}
        {...props}
        onHover={() => setIsActive(true)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </StyledInputContainer>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(INPUT_TYPES)
}

Input.defaultProps = {
  type: INPUT_TYPE.TEXT
}

export default Input
