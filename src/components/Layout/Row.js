import React from 'react'
import PropTypes from 'prop-types'
import { isArray } from 'lodash'
import { View } from 'react-native'

const Row = props => {
  const { children, style, rtl, itemsAlignBot, itemsAlignTop } = props
  let rowStyle = [{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }]
  isArray(style) ? (rowStyle = [...rowStyle, ...style]) : rowStyle.push(style)
  rtl && rowStyle.push({ justifyContent: 'flex-end' })
  itemsAlignTop && rowStyle.push({ alignItems: 'flex-start' })
  itemsAlignBot && rowStyle.push({ alignItems: 'flex-end' })
  return <View style={rowStyle}>{children}</View>
}

Row.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rtl: PropTypes.bool,
  itemsAlignTop: PropTypes.bool,
  itemsAlignBot: PropTypes.bool,
}

Row.defaultProps = {
  rtl: false,
  itemsAlignBot: false,
  itemsAlignTop: false,
  style: {},
}

export default Row
