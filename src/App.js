import React from "react"

import { ThemeProvider } from "styled-components"
import GlobalStyle, { AppWrapper } from './App.style'
import config from './config'

const App = props => (
  <ThemeProvider theme={config.currentTheme}>
    <React.Fragment>
      <AppWrapper>{props.children}</AppWrapper>
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
)
  
export default App
