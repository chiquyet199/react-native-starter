import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import Location from 'services/location'
import storage, { storageKey } from 'services/storage'
import { Navigation } from 'react-native-navigation'
import { openLandingPage } from 'services/navigation'
import { registerScreens } from './routingRegister'

class App extends React.Component {
  constructor(props) {
    super(props)
    registerScreens(store, Provider)
    this.startApp()
  }

  startApp = async () => {
    await Location.requestPermission()
    const coodrs = await Location.getCurrentLocation()
    const address = await Location.getAddress(coodrs)
    storage.set(storageKey.LATEST_LOCATION, { ...address, coodrs })
    Navigation.events().registerAppLaunchedListener(() => {
      openLandingPage()
    })
  }
}

export default App
