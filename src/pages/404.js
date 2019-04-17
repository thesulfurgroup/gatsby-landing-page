import React from "react"

import DefaultTemplate from "../components/Template/DefaultTemplate"
import SEO from "../components/SEO"
import Container from '../components/uielements/container'

const NotFoundPage = () => (
  <DefaultTemplate>
    <SEO title="404: Not found" />
    
    <Container>
      <h1>Page not found.</h1>
    </Container>
  </DefaultTemplate>
)

export default NotFoundPage
