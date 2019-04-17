import styled from 'styled-components'
import {rem} from '../../utils/style-util'

/**
 * Case Study Block
 */
const BlockCaseStudyWrapper = styled.section`
background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23eeeeee' fill-opacity='0.34' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  padding-top: ${rem(130)};
  padding-bottom: ${rem(130)};

  h2 {
    font-size: ${rem(40)};
    margin: 0 0 ${rem(65)} 0;
    text-align: center;
  }
`

/**
 * Card Handler
 */
const Cardhandler = styled.div`
  display: grid;
  grid-gap: ${rem(30)};
  grid-template-columns: repeat(1,1fr);

  @media (min-width: ${props => props.theme.breakpoint.md}) {
    grid-template-columns: repeat(3,1fr);
  }
`

export { BlockCaseStudyWrapper, Cardhandler }