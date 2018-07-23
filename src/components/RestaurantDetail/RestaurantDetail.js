import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Dimensions } from 'react-native'

import lang from 'lang'
import { Grids } from 'styles'
import { TextFont, SliderBanner } from 'components'

class RestaurantDetail extends React.Component {
  static propTypes = {
    restaurant: PropTypes.object,
    // componentId: PropTypes.string.isRequired,
    // restaurantId: PropTypes.string.isRequired,
    // getRestaurantData: PropTypes.func,
  }

  static defaultProps = {
    restaurant: {
      restaurantName: 'Ramigrant',
      openHour: '11am - 10pm',
      promotion: 'Free wine after 8 pm',
    },
    // getRestaurantData: () => {},
  }

  componentDidMount() {
    // this.props.getRestaurantData(this.props.restaurantId)
  }

  renderBannerItem = () => {
    const { width: viewportWidth } = Dimensions.get('window')
    const { openHour, promotion } = this.props.restaurant
    return (
      <View>
        <Image style={{ height: 264, width: viewportWidth }} source={require('assets/images/food-detail.png')} />
        <View style={[{ position: 'absolute', left: 8, bottom: 50 }]}>
          <View>
            <TextFont className="grey">{lang.openNow}</TextFont>
            <TextFont className="white">{openHour}</TextFont>
          </View>
          <View style={[Grids.marTop]}>
            <TextFont className="grey">{lang.promotion}</TextFont>
            <TextFont className="white">{promotion}</TextFont>
          </View>
        </View>
      </View>
    )
  }

  get detailHeader() {
    const { restaurantName } = this.props.restaurant
    return (
      <View style={{ height: 264 }}>
        <SliderBanner data={[1, 2, 3]} renderItems={this.renderBannerItem} />
        <View style={{ position: 'absolute', top: 16, left: 0, right: 0 }}>
          <View style={[Grids.row, Grids.padSm]}>
            <Image style={{ width: 16, height: 16 }} resizeMode="contain" source={require('assets/images/ico-back.png')} />
            <TextFont className="headline3 white">{restaurantName}</TextFont>
            <Image style={{ width: 16, height: 16 }} resizeMode="contain" source={require('assets/images/ico-heart-empty.png')} />
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: 'pink' }}>
        {this.detailHeader}

        {/* <BackgroundView
          style={{ width: 200, height: 200, borderWidth: 2, borderColor: 'blue' }}
          bgUrl={require('assets/images/banner-1.png')}
        >
          <TextFont className="black">{lang.topTenRestaurants}</TextFont>
          <Button className="orange large" onPress={() => {}} label="aaa" />
        </BackgroundView> */}
      </View>
    )
  }
}

export default RestaurantDetail
