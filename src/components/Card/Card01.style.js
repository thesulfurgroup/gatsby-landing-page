import styled from 'styled-components'
import {rem} from '../../utils/style-util'

const Card01Wrapper = styled.div`
  display: grid;
  grid-gap: ${rem(15)};
`
const Card01Icon = styled.div`
  height: ${rem(50)};
  
  > img {
    height: 100%;
  }
`
const Card01Title = styled.h3`
  color: ${props => props.theme.palette.white};
  font-size: ${rem(24)};
  margin: 0;
`
const Card01Divider = styled.hr`
  border: 0;
  height: ${rem(5)};
  width: 80%;
  background: ${props => props.theme.palette.primary};
  margin: 0 auto;
`
const Card01Description = styled.div`
  color: ${props => props.theme.palette.white};
  font-size: ${rem(16)}
`

export {
  Card01Wrapper,
  Card01Icon,
  Card01Title,
  Card01Divider,
  Card01Description
}