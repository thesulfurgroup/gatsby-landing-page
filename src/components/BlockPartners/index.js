import React from 'react'
import Container from '../uielements/container'
import { BlockPartnersWrapper, ImageHandler } from './index.style'

const data = [
  {image: require('../../images/partner-too-faced.png')},
  {image: require('../../images/partner-neutrogena.png')},
  {image: require('../../images/partner-nars.png')},
  {image: require('../../images/partner-aveeno.png')},
  {image: require('../../images/partner-aveeno.png')},
  {image: require('../../images/partner-bh-cosmetics.png')},
  {image: require('../../images/partner-eva-nyc.png')},
  {image: require('../../images/partner-ren.png')}
]

const BlockPartners = () => (
  <BlockPartnersWrapper>
    <Container>
      <h2>Meet Our Partners</h2>
      <ImageHandler>
        {data.map((data, index) => (
          <img src={data.image} key={index} alt="" />
        ))}
      </ImageHandler>
    </Container>
  </BlockPartnersWrapper>
)

export default BlockPartners