import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Dimensions, TouchableOpacity } from 'react-native'

import lang from 'lang'
import { pop } from 'services/navigation'
import { Grids } from 'styles'
import { fadeAndScale } from 'configs/animations'
import { Animatable, TextFont, SliderBanner, Tabs } from 'components'

class RestaurantDetail extends React.Component {
  static propTypes = {
    restaurant: PropTypes.object,
    componentId: PropTypes.string.isRequired,
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
        <View style={[{ position: 'absolute', left: 16, bottom: 50 }]}>
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
    const backToDashboard = () => pop(this.props.componentId)
    return (
      <View style={{ height: 264 }}>
        <SliderBanner data={[1, 2, 3]} renderItems={this.renderBannerItem} />
        <View style={{ position: 'absolute', top: 16, left: 0, right: 0 }}>
          <Animatable animateOnMount getAnimatedStyle={fadeAndScale} duration={800}>
            <View style={[Grids.row, Grids.padSm]}>
              <TouchableOpacity onPress={backToDashboard}>
                <Image style={{ width: 16, height: 16 }} resizeMode="contain" source={require('assets/images/ico-back.png')} />
              </TouchableOpacity>
              <TextFont className="headline3 white">{restaurantName}</TextFont>
              <Image
                style={{ width: 16, height: 16 }}
                resizeMode="contain"
                source={require('assets/images/ico-heart-empty.png')}
              />
            </View>
          </Animatable>
        </View>
      </View>
    )
  }

  get content() {
    const renderDetail = () => (
      <Animatable animateOnMount getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
        <TextFont className="black">DETAIL CONTENT</TextFont>
      </Animatable>
    )
    const renderBookTable = () => (
      <Animatable animateOnMount getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
        <TextFont className="black">BOOK A TABLE CONTENT</TextFont>
      </Animatable>
    )
    const renderDelivery = () => (
      <Animatable animateOnMount getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
        <TextFont className="black">DELIVERY CONTENT</TextFont>
      </Animatable>
    )
    const data = [
      { title: 'Detail', renderContent: renderDetail },
      { title: 'Book a table', renderContent: renderBookTable },
      { title: 'Delivery', renderContent: renderDelivery },
    ]
    return <Tabs delayAnimation={500} data={data} />
  }

  render() {
    return (
      <View style={{ backgroundColor: 'pink' }}>
        {this.detailHeader}
        {this.content}
      </View>
    )
  }
}

export default RestaurantDetail
