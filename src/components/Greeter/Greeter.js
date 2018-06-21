import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

const Greeter = props => {
  const { greetText } = props
  return <Text style={[styles.headerText, { flexDirection: 'row' }]}>{greetText}</Text>
}

Greeter.propTypes = {
  greetText: PropTypes.string,
}

Greeter.defaultProps = {
  greetText: '',
}

export default Greeter
