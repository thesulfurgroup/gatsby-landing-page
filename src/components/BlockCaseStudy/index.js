import React from 'react'

import Card02 from '../Card/Card02'
import Container from '../uielements/container'
import { BlockCaseStudyWrapper, Cardhandler } from './index.style'

const data = [
  {
    image: require('../../images/01-too-faced.jpg'),
    link: "https://thesulfurgroup.com/portfolio/too-faced-cosmetics/",
    title: "Too Faced",
  },
  {
    image: require('../../images/02-neutrogena.jpg'),
    link: "https://thesulfurgroup.com/portfolio/neutrogena-influencer-campaign/",
    title: "Neutrogena",
  },
  {
    image: require('../../images/03-bh-cosmetics.jpg'),
    link: "https://thesulfurgroup.com/portfolio/bh-cosmetics/",
    title: "BH Cosmetics",
  },
];

const BlockCaseStudy = () => (
  <BlockCaseStudyWrapper>
    <Container>
      <h2>Case Study</h2>
      
      <Cardhandler>
        {data.map((data, index) => (
          <Card02 key={index} data={data} />
        ))}
      </Cardhandler>
    </Container>
  </BlockCaseStudyWrapper>
)

export default BlockCaseStudy

