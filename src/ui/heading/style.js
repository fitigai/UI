import React from 'react'
import styled from 'styled-components'

export const StyledHeading = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  font-size: 16px;
`

StyledHeading.defaultProps = {
  as: 'h1'
}
