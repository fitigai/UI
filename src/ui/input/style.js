import React from 'react'
import styled from 'styled-components'

export const StyledInputContainer = styled(({ isActive, ...props }) => (
  <div {...props} />
))`
  display: flex;
  border: 1px solid ${({ isActive }) => (isActive ? 'blue' : 'grey')};
`

export const StyledInput = styled(({ as: Tag, ...props }) => (
  <Tag {...props} />
))`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  outline: none;
`

StyledInput.defaultProps = {
  as: 'input'
}
