import React from 'react'
import GlobalStyle from '../src/style/GlobalStyle'
import ThemeProvider from '../src/style/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  )
]
