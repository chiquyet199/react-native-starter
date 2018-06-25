import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from 'styles'

import styles from './styles'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.$primary} />
  </View>
)

export default Loading
