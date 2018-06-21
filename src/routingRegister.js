import React from 'react'
import routes from 'configs/routes'
import { Navigation } from 'react-native-navigation'
import { Home, About, Setting } from 'screens'

export function registerScreens(store, Provider) {
  // HOC to wrap each component
  const withProvider = WrappedComponent =>
    class extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <WrappedComponent {...this.props} />
          </Provider>
        )
      }
    }

  Navigation.registerComponent(routes.Home, () => withProvider(Home), store, Provider)
  Navigation.registerComponent(routes.About, () => withProvider(About), store, Provider)
  Navigation.registerComponent(routes.Setting, () => withProvider(Setting), store, Provider)
}
