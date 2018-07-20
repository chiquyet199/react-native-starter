import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import { Colors } from 'styles'
import { TextFont, ClassNameWrapper } from 'components'

const defaultStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  paddingHorizontal: 20,
  paddingVertical: 18,
  maxHeight: 60,
}

const Button = props => {
  const styleMapper = {
    orange: { backgroundColor: Colors.orangeYellow },
    white: { backgroundColor: Colors.white },
    transparent: { borderWidth: 1, borderColor: Colors.white },
    large: { paddingVertical: 18, maxHeight: 60 },
    medium: { paddingVertical: 18, maxHeight: 60 },
    small: { paddingVertical: 2, maxHeight: 30 },
  }
  const { label, onPress, className } = props
  const isWhiteButton = className.indexOf('white') > -1
  return (
    <ClassNameWrapper
      className={className}
      mapperObj={styleMapper}
      renderProps={buttonStyle => (
        <TouchableOpacity style={[defaultStyle, ...buttonStyle]} onPress={onPress}>
          <TextFont className={`${isWhiteButton ? 'black' : 'white'} regular bodyText textCenter`}>{label}</TextFont>
        </TouchableOpacity>
      )}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  className: 'orange medium',
  onPress: () => {},
}

export default Button
