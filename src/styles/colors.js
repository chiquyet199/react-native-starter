import Color from 'color'

const MODIFIER = 0.1

export default {
  primary: '#f1b116',
  primaryDarker: Color('#f1b116').darken(MODIFIER),
  primaryLighter: Color('#f1b116').lighten(MODIFIER),
  gray: '#c3c3c3',
  white: '#fafafa',
}
