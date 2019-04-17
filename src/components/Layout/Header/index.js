import React from "react"
import { StaticQuery, graphql } from "gatsby"

import NavigationBar from '../../NavigationBar'
import { AppHeaderWrapper } from "./index.style"

const AppHeader = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = { data => {
      return (
        <AppHeaderWrapper>
          <NavigationBar />
        </AppHeaderWrapper>
      )
    }}
  />
)

export default AppHeader
