import styled, { createGlobalStyle } from "styled-components"
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  /*! Base v1.0.0 */
  :root {
    font-size: ${props => props.theme.root};
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${props => props.theme.font.primary};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.font.secondary};
  }
`

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 1px;
  min-height: 100vh;
`

export default GlobalStyle
export { AppWrapper }
