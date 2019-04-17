import React from 'react'

import Container from '../uielements/container'
import Card01 from '../Card/Card01'
import backgroundImage from '../../images/_bg-ignite.jpg'
import { BlockIgniteWrapper, CardHandler } from './index.style'

const data = [
  {
    description: "We live according to our tried and true method so let us take care of the everything. From creative strategies to brand awareness, we have in-house experts with 5+ years of experience. Blending together all components to shine in harmony, we will take your company’s brand to a higher standard.",
    title: "Campaign Management",
  },
  {
    description: "The best brands make you stop and say “how did they get that look” by telling a compelling story. We are storytellers who create impactful journeys for your audience to follow & thoughtful content for beauty gurus across the spectrum to appreciate.",
    title: "Influencer Marketing",
  },
  {
    description: "Behind every beautiful person is an expert team of stylists ready to tackle any challenge ahead of them. Our expert team is composed of designers, copywriters, and marketers who venture to produce the highest quality of engaging content to develop your brand identity, culture and your story.",
    title: "Creative Development",
  }
]

const BlockIgnite = () => (
  <BlockIgniteWrapper style={{backgroundImage: `url(${backgroundImage})`}}>
    <Container>
      <h2>Let's Ignite Your Brand</h2>
      <CardHandler>
        {data.map((data, index) => (
          <Card01 key={index} data={data} />
        ))}
      </CardHandler>
    </Container>
  </BlockIgniteWrapper>
)

export default BlockIgnite