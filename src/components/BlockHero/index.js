import React from "react"

import Button from '../uielements/button'
import MagicalText from '../uielements/typography/magicaltext'
import {
  BlockHeroWrapper,
  BlockHeroBackgroundImage,
  BlockHeroContent,
  BlockHeroHeading,
  BlockHeroText,
} from "./index.style"

import backgroundImage from "../../images/beauty-hero.png"

const BlockHero = () => (
  <BlockHeroWrapper>
    <BlockHeroBackgroundImage style={{ backgroundImage: `url(${backgroundImage})` }} />
    <BlockHeroContent>
      <BlockHeroHeading>
        Break-Free From The. <MagicalText>Norm.</MagicalText>
      </BlockHeroHeading>
      <BlockHeroText>
        We're here to forge meaningful companies and oridinary people to propel
        your brand from everyday essentials to vital swear-by-products.
      </BlockHeroText>
      <Button type="dark">Ignite your Marketing</Button>
    </BlockHeroContent>
  </BlockHeroWrapper>
)

export default BlockHero
