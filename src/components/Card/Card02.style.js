import styled from 'styled-components'
import {rem} from '../../utils/style-util'
import MagicalText from '../uielements/typography/magicaltext'

const Card02BackgroundImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${rem(5)};
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
`
const Card02Link = styled.a`
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`
const Card02title = styled(MagicalText)`
  color: ${props => props.theme.palette.white};
  display: inline-block;
  font-size: ${rem(20)};
  text-transform: uppercase;
  position: absolute;
  bottom: ${rem(30)};
  right: ${rem(30)};
  z-index: 1;
`
const Card02Wrapper = styled.div`
  overflow: hidden;
  padding-top: 100%;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 ${rem(15)} ${rem(30)} rgba(0, 0, 0, 0.25), 0 ${rem(10)} ${rem(10)} rgba(0, 0, 0, 0.22);
    
    ${Card02BackgroundImage} {
      transform: scale(1.05);
    }

    ${Card02title} {
      background-size: 100% 88%;
    }
  }
`

export {
  Card02BackgroundImage,
  Card02Link,
  Card02title,
  Card02Wrapper
}