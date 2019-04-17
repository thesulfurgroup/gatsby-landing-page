import React from 'react'
import styled from 'styled-components'

const SCMagicalText = styled.span`
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  font-family: ${props => props.theme.font.primary};
  transition: background-size 0.25s ease-in;
`

const MagicalText = ({children, className}) => (
  <SCMagicalText className={className}>
    {children}
  </SCMagicalText>
)

export default MagicalText