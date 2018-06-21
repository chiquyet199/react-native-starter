import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styleVariables from 'assets/styles/variables'

import styles from './styles'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={styleVariables.$primary} />
  </View>
)

export default Loading
