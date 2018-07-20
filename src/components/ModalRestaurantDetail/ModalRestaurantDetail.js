import React from 'react'
// import PropTypes from 'prop-types'
import { View } from 'react-native'

import lang from 'lang'
// import { dismissModal } from 'services/navigation'
import { TextFont, Button } from 'components'

class ModalRestaurantDetail extends React.Component {
  static propTypes = {
    // componentId: PropTypes.string.isRequired,
    // restaurantId: PropTypes.string.isRequired,
    // getRestaurantData: PropTypes.func,
  }

  static defaultProps = {
    // getRestaurantData: () => {},
  }

  componentDidMount() {
    // this.props.getRestaurantData(this.props.restaurantId)
  }

  render() {
    return (
      <View style={{ backgroundColor: 'pink', padding: 50 }}>
        <TextFont className="black">{lang.topTenRestaurants}</TextFont>
        <Button className="orange large" onPress={() => {}} label="aaa" />
      </View>
    )
  }
}

export default ModalRestaurantDetail
