import styled from 'styled-components'
import { rem } from '../../utils/style-util'

const NavigationBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: ${rem(30)} 0;
`

const NavigationBarLogo = styled.a`
  margin-right: auto;

  > img {
    width: ${rem(80)};
  }

  &:hover {
    > img {
      animation: spin 10s linear infinite;
    }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const NavigationBarMenu = styled.div`
  display: flex;
  align-items: center;

  > .menu {
    margin: 0;
    padding: 0;

    > li {
      display: inline-block;
      margin-right: ${rem(15)};

      a {
        color: ${props => props.theme.palette.black};
        display: inline-block;
        text-decoration: none;
      }
    }
  }

  > .menu-cta {
    
  }
`

export {
  NavigationBarWrapper,
  NavigationBarLogo,
  NavigationBarMenu
}