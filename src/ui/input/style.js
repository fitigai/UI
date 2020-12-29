import React from 'react'
import styled from 'styled-components'

export const StyledInput = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  border: 1px solid blue;
`

StyledInput.defaultProps = {
  as: 'input'
}
