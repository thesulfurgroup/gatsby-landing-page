import React from "react"
import styled from "styled-components"

const AppMainWrapper = styled.main`
  flex: 1 1 auto;
  position: relative;
`

const AppMain = props => <AppMainWrapper>{props.children}</AppMainWrapper>

export default AppMain
