import React from "react"

import DefaultTemplate from "../components/Template/DefaultTemplate"
import SEO from "../components/SEO"
import BlockHero from "../components/BlockHero"
import BlockBlurb from "../components/BlockBlurb"
import BlockCaseStudy from "../components/BlockCaseStudy"
import BlockIgnite from "../components/BlockIgnite"
import BlockPartners from '../components/BlockPartners'

const IndexPage = () => {
  return (
    <DefaultTemplate>
      <SEO title="Home" />

      <BlockHero />
      <BlockBlurb />
      <BlockCaseStudy />
      <BlockIgnite />
      <BlockPartners/>
    </DefaultTemplate>
  )
}

export default IndexPage
