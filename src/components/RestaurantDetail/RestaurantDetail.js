import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'

import lang from 'lang'
import { pop } from 'services/navigation'
import { Grids } from 'styles'
import { fadeAndScale } from 'configs/animations'
import { Animatable, TextFont, SliderBanner, Tabs } from 'components'

import MenuItem from './MenuItem'
import ReviewItem from './ReviewItem'

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

  renderDetail = () => {
    const { restaurantName } = this.props.restaurant
    return (
      <Animatable animateOnMount animateOnNewProps getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
        <View style={[Grids.padSm, Grids.padHor]}>
          <TextFont className="black headline3">{restaurantName}</TextFont>
          <TextFont className="black">
            Ramigrand offers an abundance of gastronomical delights with a boundless variety of regional and seasonal dishes as
            well as international cuisine. Restaurants range from mobile food stands to centuries old ryotei, atmospheric drinking
            places, seasonally erected terraces over rivers, cheap chain shops and unique theme restaurants about ninja and
            robots. Many restaurants are specialized in a single type of dish, while others offer a variety of dishes.
          </TextFont>
        </View>

        <View style={[Grids.padVertSm, Grids.padLeft]}>
          <View style={[Grids.row, Grids.marRight]}>
            <TextFont className="black headline3">{lang.menu}</TextFont>
            <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
          </View>

          <FlatList
            data={['1', '2', '3']}
            horizontal
            keyExtractor={item => item}
            renderItem={() => (
              <View style={[Grids.marRightSm]}>
                <MenuItem />
              </View>
            )}
          />
        </View>

        <View style={[Grids.padSm, Grids.padHor]}>
          <View style={[Grids.row, Grids.marRight]}>
            <TextFont className="black headline3">{lang.location}</TextFont>
            <TextFont className="black bodyText light">{lang.viewMap}</TextFont>
          </View>
          <View>
            <View style={[Grids.row]}>
              <View style={[Grids.flex04, { backgroundColor: 'blue', height: 100 }]}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                  source={require('assets/images/fake-map.png')}
                />
              </View>
              <View style={[Grids.flex06, Grids.padLeftSm]}>
                <TextFont className="black">340 Prachasurn Rd. Bangrak Bangkok 10800</TextFont>
                <TextFont className="black">BTS Saladeang</TextFont>
                <TextFont className="black">MRT Silom</TextFont>
                <TextFont className="black">Bus 17, 85, 87</TextFont>
                <TextFont className="black">17 mins walk</TextFont>
              </View>
            </View>
          </View>
        </View>

        <View style={[Grids.padSm, Grids.padHor]}>
          <View style={[Grids.row]}>
            <TextFont className="black headline3">{lang.review}</TextFont>
            <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
          </View>
          <View>
            <ReviewItem />
            <ReviewItem />
          </View>
        </View>
      </Animatable>
    )
  }
  renderBookTable = () => (
    <Animatable animateOnMount animateOnNewProps getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
      <TextFont className="black">BOOK A TABLE CONTENT</TextFont>
    </Animatable>
  )
  renderDelivery = () => (
    <Animatable animateOnMount animateOnNewProps getAnimatedStyle={fadeAndScale} duration={1000} delay={650}>
      <TextFont className="black">DELIVERY CONTENT</TextFont>
    </Animatable>
  )
  get content() {
    const data = [
      { title: 'Detail', renderContent: this.renderDetail },
      { title: 'Book a table', renderContent: this.renderBookTable },
      { title: 'Delivery', renderContent: this.renderDelivery },
    ]
    return <Tabs delayAnimation={500} data={data} />
  }

  render() {
    return (
      <ScrollView style={{ marginTop: -20, backgroundColor: '#fafafa' }}>
        {this.detailHeader}
        {this.content}
        <View style={{ height: 16 }} />
      </ScrollView>
    )
  }
}

export default RestaurantDetail
