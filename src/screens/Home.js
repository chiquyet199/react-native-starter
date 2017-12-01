import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Container from './../components/Container'
import Greeter from './../components/Greeter'

class Home extends Component {
	render() {
		return (
			<Container center={true}>
				<Greeter />
			</Container>
		)
	}
}

export default Home