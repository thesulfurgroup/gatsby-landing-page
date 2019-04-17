import React from 'react'

import {
  Card02Wrapper,
  Card02title,
  Card02Link,
  Card02BackgroundImage
} from './Card02.style'

const CaseStudyCard = ({data}) => (
  <Card02Wrapper>
    <Card02BackgroundImage className="card__background-image" style={{backgroundImage: `url(${data.image})`}}/>
    <Card02Link href={data.link} className="card__link"></Card02Link>
    <Card02title>{data.title}</Card02title>
  </Card02Wrapper>
)

export default CaseStudyCard