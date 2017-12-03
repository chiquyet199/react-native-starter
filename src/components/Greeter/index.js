import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Greeter extends Component {
	static propTypes = {
		greetText: PropTypes.string,
	};

	static defaultProps = {
		greetText: 'Hello',
	};

	render() {
		const { greetText } = this.props;
		return <Text style={styles.headerText}>{greetText}</Text>;
	}
}

export default Greeter;
