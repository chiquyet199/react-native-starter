import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

class Greeter extends Component {
	render() {
		return <Text style={styles.headerText}>Wellcome to React Starter</Text>;
	}
}

export default Greeter;
