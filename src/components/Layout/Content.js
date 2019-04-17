import React from "react"
import styled from "styled-components"

const AppContentWrapper = styled.div`
  position: relative;
`

const AppContent = props => <AppContentWrapper>{props.children}</AppContentWrapper>

export default AppContent
