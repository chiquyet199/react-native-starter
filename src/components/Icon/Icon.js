import React from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity } from 'react-native'
import { Colors } from 'styles'

const Icon = props => {
  const { src, onPress } = props
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 25,
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <Image style={{ width: 25, height: 25 }} resizeMode="contain" source={src} />
    </TouchableOpacity>
  )
}

Icon.propTypes = {
  src: PropTypes.any,
  onPress: PropTypes.func,
}

Icon.defaultProps = {
  src: null,
  onPress: () => {},
}

export default Icon
