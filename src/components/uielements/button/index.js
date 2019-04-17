import React from "react"
import { Button as SCButton } from "../button/index.style"

const Button = ({children, type, size, block}) => {
  const btnType = (
    type === 'success' ?
      'btn--success' :
    type === 'info' ?
      'btn--info' :
    type === 'warning' ?
      'btn--warning' :
    type === 'danger' ?
      'btn--danger' :
    type === 'dark' ?
      'btn--dark' : ''
  )

  const btnSize =(
    size === 'sm' ?
      'btn--sm' :
    size === 'lg' ?
      'btn--lg' : ''
  )

  const btnBlock = block ? 'btn--block' : ''

  return (
    <SCButton className={`btn ${btnType} ${btnSize} ${btnBlock}`}>
      <span>{children}</span>
    </SCButton>
  )
}
  
export default Button
