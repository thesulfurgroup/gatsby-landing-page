import React from "react"

import App from "../../App"
import AppHeader from "../Layout/Header"
import AppMain from "../Layout/Main"
import AppContent from "../Layout/Content"
import AppFooter from "../Layout/Footer"

const DefaultTemplate = props => (
  <App>
    <AppHeader />
    <AppMain>
      <AppContent>{props.children}</AppContent>
    </AppMain>
    <AppFooter />
  </App>
)

export default DefaultTemplate
