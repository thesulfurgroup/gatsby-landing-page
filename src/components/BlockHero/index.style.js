import styled from 'styled-components'
import {rem} from '../../utils/style-util'

const BlockHeroWrapper = styled.div`
  background-color: ${props => props.theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`
const BlockHeroBackgroundImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
`
const BlockHeroContent = styled.div`
  max-width: ${rem(1070)};
  padding: 0 ${rem(30)};
  position: relative;
  z-index: 3;
  text-align: center;
`
const BlockHeroHeading = styled.h1`
  font-size: ${rem(40)};
  font-weight: 700;
  margin: 0 0 ${rem(15)} 0;
`
const BlockHeroText = styled.p`
  background-color: ${props => props.theme.palette.black};
  color: ${props => props.theme.palette.white};
  font-size: ${rem(19)};
  line-height: ${rem(32)};
  margin: 0 0 ${rem(15)} 0;
  padding: ${rem(30)};
`



export { BlockHeroWrapper, BlockHeroBackgroundImage, BlockHeroContent, BlockHeroHeading, BlockHeroText }