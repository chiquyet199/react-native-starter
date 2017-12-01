import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

class Container extends Component {
	render() {
		const { center, margin, padding } = this.props;
		const containerStyles = [styles.container];
		center && containerStyles.push(styles.containerCenterItems);
		margin && containerStyles.push(styles.containerWithMargin);
		padding && containerStyles.push(styles.containerWithPadding);

		return <View style={containerStyles}>{this.props.children}</View>;
	}
}

export default Container;
