import React from 'react'
import styled from 'styled-components'

import { ALERT_TYPE, COLOR, RADIUS } from '../../utils/constants'

export const getColorByType = (type) =>
  ({
    [ALERT_TYPE.DANGER]: COLOR.DANGER,
    [ALERT_TYPE.INFO]: COLOR.INFO,
    [ALERT_TYPE.SUCCESS]: COLOR.SUCCESS,
    [ALERT_TYPE.WARNING]: COLOR.WARNING
  }[type])

export const StyledAlert = styled(({ type, ...props }) => <div {...props} />)`
  background-color: ${({ type }) => getColorByType(type)}22;
  border-radius: ${RADIUS.DEFAULT};
  border: 1px solid ${({ type }) => getColorByType(type)};
  display: flex;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
`

export const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
`
