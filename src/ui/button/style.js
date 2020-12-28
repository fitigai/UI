import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled(({ as: Tag, ...props }) => {
  // const Tag = as

  return <Tag {...props} />
})`
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
`

StyledButton.defaultProps = {
  as: 'button'
}
