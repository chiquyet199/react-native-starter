import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Container = (props) => {
	const {
		center, margin, padding, children,
	} = props;
	const containerStyles = [styles.container];
	center && containerStyles.push(styles.containerCenterItems);
	margin && containerStyles.push(styles.containerWithMargin);
	padding && containerStyles.push(styles.containerWithPadding);

	return <View style={containerStyles}>{children}</View>;
};

Container.propTypes = {
	center: PropTypes.bool,
	margin: PropTypes.bool,
	padding: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Container.defaultProps = {
	center: false,
	margin: false,
	padding: false,
};

export default Container;
