import React from 'react'
import { ThemeProvider } from 'styled-components'

import { COLOR, FONT_FAMILY } from '../utils/constants'

const defaultTheme = {
  colorBorder: COLOR.BORDER,
  colorText: COLOR.TEXT,

  fontFamily: FONT_FAMILY.DEFAULT,

  fontSizeXS: '0.7rem',
  fontSizeS: '0.9rem',
  fontSizeM: '1rem',

  fontWeightNormal: '300',
  fontWeightBold: '700'
}

const themeProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
)

themeProvider.defaultProps = {
  theme: null
}

export default themeProvider
