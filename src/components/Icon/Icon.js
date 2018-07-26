import React from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity } from 'react-native'
import { Colors, Styles } from 'styles'

const Icon = props => {
  const { src, onPress } = props
  return (
    <TouchableOpacity
      style={[
        Styles.borderShadow,
        {
          width: 50,
          height: 50,
          borderRadius: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.white,
        },
      ]}
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
