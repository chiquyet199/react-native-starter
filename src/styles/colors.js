import Color from 'color'

const MODIFIER = 0.3

export default {
  orange: '#ef7e5e',
  orangeYellow: '#ffa802',
  blue: '#4a90e2',
  blueSky: '#4a4a4a',
  grey: '#9b9b9b',
  white: '#ffffff',
  whiteOpacity: Color('#ffffff').darken(MODIFIER),
  black: '#000000',
  blackOpacity: Color('#000000').darken(MODIFIER),
}
