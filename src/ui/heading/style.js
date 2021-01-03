import React from 'react'
import styled from 'styled-components'

import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE_TITLE,
  LINE_HEIGHT_TITLE,
  MEDIA_QUERY,
  SIZE
} from '../../utils/constants'

const getMediumSize = (size) => {
  if (size === SIZE.XL) {
    return SIZE.L.toUpperCase()
  } else if (size === SIZE.L) {
    return SIZE.M.toUpperCase()
  } else if (size === SIZE.M) {
    return SIZE.S.toUpperCase()
  }
  return SIZE.XS.toUpperCase()
}

const getSmallSize = (size) => {
  if (size === SIZE.XL) {
    return SIZE.M.toUpperCase()
  } else if (size === SIZE.L) {
    return SIZE.S.toUpperCase()
  }
  return SIZE.XS.toUpperCase()
}

export const StyledHeading = styled(({ as: Tag, size, ...props }) => {
  return <Tag {...props} />
})`
  // color: ${COLOR.TEXT};
  color: inherit;
  font-family: ${FONT_FAMILY.DEFAULT};
  font-size: ${({ size }) => FONT_SIZE_TITLE[size.toUpperCase()]};
  line-height: ${({ size }) => LINE_HEIGHT_TITLE[size.toUpperCase()]};
  margin: 0 0 10px 0;
  padding: 0;

  ${MEDIA_QUERY.M_AND_DOWN} {
    font-size: ${({ size }) => FONT_SIZE_TITLE[getMediumSize(size)]};
    line-height: ${({ size }) => LINE_HEIGHT_TITLE[getMediumSize(size)]};
  }
  ${MEDIA_QUERY.S_AND_DOWN} {
    font-size: ${({ size }) => FONT_SIZE_TITLE[getSmallSize(size)]};
    line-height: ${({ size }) => LINE_HEIGHT_TITLE[getSmallSize(size)]};
  }
`

StyledHeading.defaultProps = {
  as: 'h1',
  size: SIZE.M
}
