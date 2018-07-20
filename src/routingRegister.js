import React from 'react'
import routes from 'configs/routes'
import { Navigation } from 'react-native-navigation'
import { ModalRestaurantDetail } from 'components'
import { DashBoard, About, Settings, SideMenu, Welcome } from 'modules'

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

  Navigation.registerComponent(routes.DashBoard, () => withProvider(DashBoard), store, Provider)
  Navigation.registerComponent(routes.About, () => withProvider(About), store, Provider)
  Navigation.registerComponent(routes.Settings, () => withProvider(Settings), store, Provider)
  Navigation.registerComponent(routes.SideMenu, () => withProvider(SideMenu), store, Provider)
  Navigation.registerComponent(routes.Welcome, () => withProvider(Welcome), store, Provider)
  Navigation.registerComponent(routes.ModalRestaurantDetail, () => withProvider(ModalRestaurantDetail), store, Provider)
}
