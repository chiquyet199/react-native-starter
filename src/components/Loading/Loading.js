import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { commonStyle } from 'configs/common-style-variables';

import styles from './styles';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={commonStyle.$primary} />
  </View>
);

export default Loading;
