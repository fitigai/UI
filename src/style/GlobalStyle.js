import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colorText};
  }
  
  body,
  #root {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.colorText};
    font-size: 1rem;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`
