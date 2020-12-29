import React from 'react'
import styled from 'styled-components'

export const StyledIcon = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  border: 1px solid blue;
`

StyledIcon.defaultProps = {
  as: 'i'
}
