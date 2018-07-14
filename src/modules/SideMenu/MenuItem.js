import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import { TextFont } from 'components'

const MenuItem = props => {
  const { text, icon } = props
  return (
    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
      <Image resizeMode="contain" style={{ width: 20, height: 20, marginRight: 16 }} source={icon} />
      <TextFont className="black">{text}</TextFont>
    </View>
  )
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
}

export default MenuItem
