import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

class Header extends Component {
	static propTypes = {
		onSettingPress: PropTypes.func,
	};

	static defaultProps = {
		onSettingPress: null,
	};

	render() {
		const { onSettingPress } = this.props;
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.button} onPress={onSettingPress}>
					<Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
				</TouchableHighlight>
			</View>
		);
	}
}
export default Header;
