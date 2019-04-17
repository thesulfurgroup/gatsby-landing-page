import styled from "styled-components"
import {rem} from '../../../utils/style-util'

export const Button = styled.button`
  &.btn {
    background-color: ${props => props.theme.palette.gray};
    background-image: none;
    border: ${rem(1)} solid transparent;
    border-radius: ${rem(5)};
    color: ${props => props.theme.palette.black};
    cursor: pointer;
    display: inline-block;
    font-size: ${rem(16)};
    font-weight: 400;
    letter-spacing: ${rem(3)};
    margin: ${rem(2)};
    max-width: 100%;
    padding: ${rem(16)} ${rem(30)};
    position: relative;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    user-select: none;

    > span {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }

    &:hover {
      box-shadow: 0 ${rem(15)} ${rem(30)} rgba(0, 0, 0, 0.25), 0 ${rem(10)} ${rem(10)} rgba(0, 0, 0, 0.22);
    }

    // Block
    &.btn--block {
      display: block;
      width: 100%;
    }

    // TYPE
    &.btn--success {
      background-color: ${props => props.theme.palette.success};
      color: ${props => props.theme.palette.white};
    }

    &.btn--info {
      background-color: ${props => props.theme.palette.info};
      color: ${props => props.theme.palette.white};
    }

    &.btn--warning {
      background-color: ${props => props.theme.palette.warning};
      color: ${props => props.theme.palette.white};
    }

    &.btn--danger {
      background-color: ${props => props.theme.palette.danger};
      color: ${props => props.theme.palette.white};
    }

    &.btn--dark {
      background-color: ${props => props.theme.palette.black};
      color: ${props => props.theme.palette.white};
    }

    &.btn--sm {
      font-size: ${rem(14)};
      padding: ${rem(6)} ${rem(15)};
    }
  }
`
