import React from 'react'
import styled from 'styled-components'

import { COLOR, FONT, MEDIA_QUERY } from '../../utils/constants'

export const StyledHeading = styled(({ as: Tag, ...props }) => {
  return <Tag {...props} />
})`
  color: ${COLOR.TEXT};
  font-family: ${FONT.DEFAULT};
  font-size: 52px;
  line-height: 58px;
  margin: 0;
  padding: 0;

  ${MEDIA_QUERY.M_AND_DOWN} {
    font-size: 42px;
    line-height: 48px;
  }
  ${MEDIA_QUERY.S_AND_DOWN} {
    font-size: 32px;
    line-height: 36px;
  }
`

StyledHeading.defaultProps = {
  as: 'h1'
}
