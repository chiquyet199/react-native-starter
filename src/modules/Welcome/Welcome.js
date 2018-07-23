import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, Dimensions, StatusBar } from 'react-native'

import lang from 'lang'
import storage, { storageKey } from 'services/storage'
import { Styles } from 'styles'
import { setLocation } from 'store/actions/common.actions'
import { openMainPage } from 'services/navigation'
import WelcomeSlide from './WelcomeSlide'

class Welcome extends React.Component {
  static propTypes = {
    setLocation: PropTypes.func.isRequired,
  }

  state = {
    activeSlide: 0,
    data: [
      {
        header: lang.betterSearchRestaurants,
        subHeader: lang.easyToFindRestaurants,
        background: require('assets/images/welcome_bg1.png'),
        icon: require('assets/images/icon-spoon-fork.png'),
      },
      {
        header: lang.bestDealOfTheDayAnd,
        subHeader: lang.easyToPlanYourFoodAndFindBestDeal,
        background: require('assets/images/welcome_bg2.png'),
      },
      {
        header: lang.foodDeliveryAndReservation,
        subHeader: lang.bookATableAndGetDiscount,
        background: require('assets/images/welcome_bg3.png'),
      },
      { header: lang.planYourFood, subHeader: lang.easyToPlanYourFood, background: require('assets/images/welcome_bg4.png') },
    ],
  }

  async componentDidMount() {
    const location = await storage.get(storageKey.LATEST_LOCATION)
    const isFirstUse = await storage.get(storageKey.FIRST_USE)
    this.props.setLocation(location)
    if (!isFirstUse && isFirstUse !== null) {
      // openMainPage()
    }
  }

  get pagination() {
    const { data, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
        dotStyle={Styles.activeDotStyle}
        inactiveDotStyle={Styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    )
  }

  renderItems = ({ item }) => (
    <WelcomeSlide header={item.header} subHeader={item.subHeader} icon={item.icon} background={item.background} />
  )

  setActiveSlide = index => this.setState({ activeSlide: index })

  onLastSlideActive = index => {
    if (index === this.state.data.length - 1) setTimeout(openMainPage, 2000)
  }

  onSnapToItem = index => {
    this.setActiveSlide(index)
    this.onLastSlideActive(index)
  }

  render() {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Carousel
          data={this.state.data}
          renderItem={this.renderItems}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{ width: viewportWidth }}
          onSnapToItem={this.onSnapToItem}
          inactiveSlideOpacity={0.7}
          inactiveSlideScale={1}
        />
        {this.pagination}
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Welcome)
