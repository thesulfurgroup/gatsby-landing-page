import {rem} from 'polished'

const theme = {}

/*----------------------------------------------------------
Root Font Size
----------------------------------------------------------*/
theme.root = `15px`

/*----------------------------------------------------------
Palettes
----------------------------------------------------------*/
theme.palette = {
  // Main
  primary: `#ffe104`,
  accent: `#8c88ff`,

  // Semantic
  success: `#7ed321`,
  info: `#4a90e2`,
  warning: `#ffd806`,
  danger: `#ff3366`,

  // Neutral
  black: `#000000`,
  dark: `#344457`,
  gray: `#d6d6d6`,
  white: `#ffffff`,
}

/*----------------------------------------------------------
Theme Fonts
----------------------------------------------------------*/
theme.font = {
  primary: `'Lato', sans-serif`, // Default
  secondary: `'Montserrat', sans-serif`,
}

/*----------------------------------------------------------
Theme Font Sizes
----------------------------------------------------------*/
theme.fontSize = {
  title1: `${rem(48, theme.root)}`,
  title2: `${rem(32, theme.root)}`,
  title3: `${rem(24, theme.root)}`,
  large: `${rem(20, theme.root)}`,
  regular: `${rem(15, theme.root)}`,
  small: `${rem(12, theme.root)}`,
  micro: `${rem(8, theme.root)}`
}

/*----------------------------------------------------------
Theme Responsiveness Breakpoints
----------------------------------------------------------*/
theme.breakpoint = {
  sm: `576px`,
  md: `768px`,
  lg: `992px`,
  xl: `1140px`,
  xxl: `1400px`,
  hd: `1920px`
}

export default theme
