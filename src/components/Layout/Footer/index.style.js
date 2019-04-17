import styled from 'styled-components'
import {rem} from '../../../utils/style-util'

const AppFooterWrapper = styled.footer`
  background-color: ${props => props.theme.palette.primary};
  padding: ${rem(80)} 0;
  position: relative;
`

const AppFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${rem(30)};
  margin-bottom: ${rem(30)};

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const AppFooterGridItem = styled.div`
  h4 {
    font-size: ${rem(18)};
    margin: 0;
    padding-bottom: ${rem(25)};
  }
  ul {
    line-height: 2em;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${props => props.theme.palette.black};
    text-decoration: none;
  }
`

const AppFooterCopyright = styled.div`
  font-size: ${rem(13)};
  letter-spacing: ${rem(2)};
  line-height: ${rem(20)};
  text-align:center;
  text-transform: uppercase;
`

export {
  AppFooterWrapper,
  AppFooterGrid,
  AppFooterGridItem,
  AppFooterCopyright
}