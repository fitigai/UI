import React from 'react'
import styled from 'styled-components'

import { COLOR, FONT_FAMILY, BUTTON_TYPE, RADIUS } from '../../utils/constants'

const getBackground = (type, isHover = false) => {
  let color

  switch (type) {
    case BUTTON_TYPE.MINIMAL:
      color = isHover ? COLOR.BACKGROUND_LIGHT : 'transparent'
      break
    case BUTTON_TYPE.PLAIN:
      color = isHover ? COLOR.BACKGROUND_DARKEST : 'transparent'
      break
    case BUTTON_TYPE.PRIMARY:
    default:
      color = isHover ? 'transparent' : COLOR.BACKGROUND_DARKEST
      break
  }

  return `background-color: ${color};`
}

const getColor = (type, isHover = false) => {
  let color

  switch (type) {
    case BUTTON_TYPE.MINIMAL:
      color = COLOR.TEXT
      break
    case BUTTON_TYPE.PLAIN:
      color = isHover ? COLOR.TEXT_WHITE : COLOR.TEXT
      break
    case BUTTON_TYPE.PRIMARY:
    default:
      color = isHover ? COLOR.TEXT : COLOR.TEXT_WHITE
      break
  }

  return `color: ${color};`
}

const getBorder = (type) => {
  let color

  switch (type) {
    case BUTTON_TYPE.MINIMAL:
      color = 'transparent'
      break
    case BUTTON_TYPE.PLAIN:
      color = COLOR.BACKGROUND_DARKEST
      break
    case BUTTON_TYPE.PRIMARY:
    default:
      color = COLOR.BACKGROUND_DARKEST
      break
  }

  return `border: 2px solid ${color};`
}

export const StyledButton = styled(({ as: Tag, type, ...props }) => (
  <Tag {...props} />
))`
  ${({ type }) => getBackground(type)}
  ${({ type }) => getColor(type)}
  ${({ type }) => getBorder(type)}
  border-radius: ${RADIUS.DEFAULT};
  cursor: pointer;
  display: inline-block;
  font-family: ${FONT_FAMILY.DEFAULT};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 14px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:active,
  &:focus,
  &:hover {
    ${({ type }) => getBackground(type, true)}
    ${({ type }) => getColor(type, true)}
    ${({ type }) => getBorder(type)}
  }
`

StyledButton.defaultProps = {
  as: 'button'
}
