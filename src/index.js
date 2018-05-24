import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import store from 'configs/store';
import { Root } from 'configs/routes';
import styleVariables from 'assets/styles/variables';

EStyleSheet.build(styleVariables);

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
