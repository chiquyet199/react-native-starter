import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

const Header = (props) => {
	const { onSettingPress } = props;
	return (
		<View style={styles.container}>
			<TouchableHighlight style={styles.button} onPress={onSettingPress}>
				<Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
			</TouchableHighlight>
		</View>
	);
};

Header.propTypes = {
	onSettingPress: PropTypes.func,
};

Header.defaultProps = {
	onSettingPress: null,
};

export default Header;
