import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import { Navigation } from 'react-native-navigation'
import { openLandingPage } from 'services/navigation'
import { registerScreens } from './routingRegister'

class App extends React.Component {
  constructor(props) {
    super(props)
    registerScreens(store, Provider)
    this.startApp()
  }

  startApp = () => {
    Navigation.events().registerAppLaunchedListener(() => {
      openLandingPage()
      // openMainPage()
    })
  }
}

export default App
