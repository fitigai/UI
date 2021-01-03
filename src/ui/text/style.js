import React from 'react'
import styled from 'styled-components'

export const StyledText = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  margin: 0;
  padding: 0;
  color: inherit;
`

StyledText.defaultProps = {
  as: 'p'
}
