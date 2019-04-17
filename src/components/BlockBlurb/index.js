import React from 'react'

import Container from '../uielements/container'
import Card01 from '../Card/Card01'
import { BlockBlurbWrapper, CardHandler } from './index.style'

const data = [
  {
    description: "Numbers never lie, neither do we. Through measuring, analyzing, and re-executing we are constantly ahead of the trend in traditional advertising.",
    icon: require('../../images/icons/icon-mirror.png'),
    title: "Data Driven Analytics",
  },
  {
    description: "Your brand is our brand. We custom-tailor our search in connecting you with the closest true-to-fit identity to spark your audience.",
    icon: require('../../images/icons/icon-brush.png'),
    title: "Authentic Engagement",
  },
  {
    description: "We’re all about people and genuine connections. True engagement begins with honest talent and in-person interactions to create full coverage experience for all.",
    icon: require('../../images/icons/icon-makeup.png'),
    title: "Quality Relationships",
  },
  {
    description: "Every step and action is intentional. Our methodology integrates multi-media marketing and calculated design to propel each campaign into success.",
    icon: require('../../images/icons/icon-lipstick.png'),
    title: "Strategy Development",
  }
];

const BlockBlurb= () => {
  return (
    <BlockBlurbWrapper>
      <Container>
        <h2>A Redefined Palette Of Innovation</h2>
        <CardHandler>
          {data.map((data, index) => (
            <Card01 key={index} data={data} />
          ))}
        </CardHandler>
      </Container>
    </BlockBlurbWrapper>
  )
}

export default BlockBlurb