import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Root } from 'configs/routes';
import { commonStyle } from 'configs/common-style-variables';

EStyleSheet.build(commonStyle);

class App extends Component {
	render() {
		return <Root />;
	}
}

export default App;
