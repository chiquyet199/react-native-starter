import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Greeter from 'components/Greeter';

class Settings extends Component {
	static propTypes = {
		navigation: PropTypes.object,
	};

	static defaultProps = {
		navigation: null,
	};

	render() {
		const { customData } = this.props.navigation.state.params;
		return (
			<Container center>
				<Greeter greetText={customData} />
			</Container>
		);
	}
}

export default Settings;
