import React from 'react'
import { 
  Card01Wrapper,
  Card01Icon,
  Card01Title,
  Card01Divider,
  Card01Description
} from './Card01.style'

const Card01 = ({data}) => (
  <Card01Wrapper>
    {data.icon && (
        <Card01Icon>
          <img src={data.icon} alt="" />
        </Card01Icon>
    )}
    
    <Card01Title>
      {data.title}
    </Card01Title>
    <Card01Divider />
    <Card01Description>
      {data.description}
    </Card01Description>
  </Card01Wrapper>
)

export default Card01