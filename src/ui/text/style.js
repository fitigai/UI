import React from 'react'
import styled from 'styled-components'

import { COLOR, FONT } from '../../utils/constants'

export const StyledText = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  font-size: 16px;
  line-height: 20px;
  font-family: ${FONT.DEFAULT};
  margin: 0;
  padding: 0;
  color: ${COLOR.TEXT};
`

StyledText.defaultProps = {
  as: 'p'
}
