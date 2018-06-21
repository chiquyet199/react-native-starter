import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

const Container = props => {
  const { children } = props
  const containerStyles = [styles.container]

  return <View style={containerStyles}>{children}</View>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
