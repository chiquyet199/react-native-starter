import React from 'react'
import PropTypes from 'prop-types'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, Image, Dimensions, StatusBar } from 'react-native'

import { Styles, Grids, Colors } from 'styles'
import { TextFont } from 'components'
import lang from 'lang'
// import { openMainPage } from 'services/navigation'

const WelcomeSlide = props => {
  const { header, subHeader, icon, background } = props
  const headerStyle = [{}]
  const subHeaderStyle = [Grids.marTop, { width: '80%' }]
  const iconStyle = [Grids.marTop, { width: 57, height: 57 }]
  return (
    <View>
      <Image style={[Styles.fullHeight, Styles.fullWidth]} source={background} />
      <View style={[Styles.absoluteFull, Grids.padLg]}>
        <View style={[Grids.flex1, { justifyContent: 'center' }]}>
          <View style={headerStyle}>
            <TextFont className="white light headline2">{header}</TextFont>
          </View>
          <View style={subHeaderStyle}>
            <TextFont className="white body">{subHeader ? subHeader.toUpperCase() : ''}</TextFont>
          </View>
          {icon && <Image style={iconStyle} source={icon} />}
        </View>
      </View>
    </View>
  )
}

WelcomeSlide.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  background: PropTypes.any.isRequired,
  icon: PropTypes.any,
}

WelcomeSlide.defaultProps = {
  icon: null,
}

class Welcome extends React.Component {
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
        header: lang.bestDealOfTheDay,
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

  get pagination() {
    const { data, activeSlide } = this.state
    const dotStyle = {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: Colors.white,
    }
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
        dotStyle={dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }

  renderItems = ({ item }) => (
    <WelcomeSlide header={item.header} subHeader={item.subHeader} icon={item.icon} background={item.background} />
  )

  onSnapToItem = index => this.setState({ activeSlide: index })

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Carousel
          data={this.state.data}
          renderItem={this.renderItems}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={this.onSnapToItem}
          // callbackOffsetMargin={0}
        />
        {this.pagination}
      </View>
    )
  }
}

export default Welcome
