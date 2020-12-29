import React from 'react'
import styled from 'styled-components'

export const StyledDropdown = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  border: 1px solid blue;
`

StyledDropdown.defaultProps = {
  as: 'i'
}
