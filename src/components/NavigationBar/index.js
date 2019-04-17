import React from 'react'
// import { Link } from "gatsby"
import Container from '../uielements/container'
import Button from '../uielements/button'
import {
  NavigationBarWrapper,
  NavigationBarLogo,
  NavigationBarMenu
} from './index.style'

import Logo from '../../images/site-logo.png'

const NavigationBar = () => (
  <Container>
    <NavigationBarWrapper>
      <NavigationBarLogo href="https://thesulfurgroup.com">
        <img src={Logo} alt="The Sulfur Group" />
      </NavigationBarLogo>
      <NavigationBarMenu>
        {/* <ul className="menu">
          <li><Link to="/">Home</Link></li>
        </ul> */}
        <div className="menu-cta">
          <Button size="sm" type="dark">Contact Us</Button>
        </div>
      </NavigationBarMenu>
    </NavigationBarWrapper>
  </Container>
)

export default NavigationBar