import React from 'react'

import Container from '../../uielements/container'
import Button from '../../uielements/button'
import MagicalText from '../../uielements/typography/magicaltext'
import { AppFooterWrapper, AppFooterGrid, AppFooterGridItem, AppFooterCopyright } from './index.style'

const AppFooter = () => (
  <AppFooterWrapper>
    <Container>
      <AppFooterGrid>
        <AppFooterGridItem>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:hello@thesulfurgroup.com">Hello@TheSulfurGroup.com</a></li>
            <li>Phone: <a href="tel:(213) 545-2744">(213) 545-2744</a></li>
          </ul>
        </AppFooterGridItem>
        <AppFooterGridItem>
          <Button type="dark" block>Get Lit</Button>
        </AppFooterGridItem>
      </AppFooterGrid>
      <AppFooterCopyright>
        © Copyright {new Date().getFullYear()} - <MagicalText>The Sulfur Group.</MagicalText> All Rights Reserved.
      </AppFooterCopyright>
    </Container>
  </AppFooterWrapper>
)

export default AppFooter