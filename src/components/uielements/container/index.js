import React from 'react'
import {SCContainer } from './index.style'

const Container = props => (
    <SCContainer className={props.className}>
      {props.children}
    </SCContainer>
)

export default Container