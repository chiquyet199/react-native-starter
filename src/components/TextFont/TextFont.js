import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { Fonts, Colors } from 'styles'

const TextFont = props => {
  const { className, children, style } = props
  const getMapStyle = classNameStr => {
    const styleMapper = {
      bold: { fontFamily: Fonts.bold },
      light: { fontFamily: Fonts.light },
      regular: { fontFamily: Fonts.regular },
      white: { color: Colors.white },
      black: { color: Colors.black },
      grey: { color: Colors.grey },
      textLeft: { textAlign: 'left' },
      textRight: { textAlign: 'right' },
      textCenter: { textAlign: 'center' },
      smallText: { fontSize: Fonts.text, lineHeight: Fonts.textLineHeight },
      bodyText: { fontSize: Fonts.body, lineHeight: Fonts.bodyLineHeight },
      headline1: { fontSize: Fonts.headline1, lineHeight: Fonts.headline1LineHeight },
      headline2: { fontSize: Fonts.headline2, lineHeight: Fonts.headline2LineHeight },
      headline3: { fontSize: Fonts.headline3, lineHeight: Fonts.headline3LineHeight },
      headline4: { fontSize: Fonts.headline4, lineHeight: Fonts.headline4LineHeight },
    }
    return styleMapper[classNameStr]
  }
  const getStyleBaseOnClassName = classNameStr => classNameStr.split(' ').map(getMapStyle)
  const mappedStyle = getStyleBaseOnClassName(className)
  const defaultStyle = {}
  const textStyle = [defaultStyle, ...mappedStyle, style]
  return (
    <Text {...props} style={textStyle}>
      {children}
    </Text>
  )
}

TextFont.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

TextFont.defaultProps = {
  style: {},
  className: 'textLeft white regular bodyText',
  children: null,
}

export default TextFont
