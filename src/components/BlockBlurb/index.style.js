import styled from 'styled-components'
import {rem} from '../../utils/style-util'

/**
 * Blurb Block
 */
const BlockBlurbWrapper = styled.section`
  background-color: ${props => props.theme.palette.black};
  padding-top: ${rem(130)};
  padding-bottom: ${rem(130)};

  h2 {
    color: ${props => props.theme.palette.white};
    font-size: ${rem(40)};
    margin: 0 0 ${rem(65)} 0;
    text-align: center;
  }
`

/**
 * Card Handler
 */
const CardHandler = styled.div`
  display: grid;
  grid-gap: ${rem(30)};
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export {
  BlockBlurbWrapper,
  CardHandler,
}