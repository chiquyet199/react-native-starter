import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, View, StatusBar, FlatList, Image, Dimensions } from 'react-native'

import lang from 'lang'
import routes from 'configs/routes'
import storage, { storageKey } from 'services/storage'
import { Grids } from 'styles'
import { openRestaurantDetailModal, navigate } from 'services/navigation'
import { markedAsSubsequenceUse } from 'store/actions/common.actions'
import { getLoading, getCurrentLocation } from 'store/selectors/common.selectors'
import { getGreetText } from 'store/selectors/data.selectors'
import { Header, SliderBanner, Card, TextFont } from 'components'
import { CategoryFilterSlider } from 'modules/DashBoard/components'

class DashBoard extends Component {
  static propTypes = {
    componentId: PropTypes.string.isRequired,
    currentLocation: PropTypes.object.isRequired,
  }

  static defaultProps = {}

  componentDidMount() {
    storage.set(storageKey.FIRST_USE, false)
  }

  goToAbout = () => {
    navigate(routes.About)
  }

  renderBannerItem = () => {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <View>
        <Image data={[1, 2, 3]} style={{ height: 193, width: viewportWidth }} source={require('assets/images/banner-1.png')} />
      </View>
    )
  }

  get Header() {
    const city = this.props.currentLocation ? this.props.currentLocation.address.city : ''
    return (
      <View>
        <SliderBanner data={[1, 2, 3]} renderItems={this.renderBannerItem} />
        <View style={{ position: 'absolute', top: 16, left: 0, right: 0 }}>
          <Header title={city} parentId={this.props.componentId} />
        </View>
      </View>
    )
  }

  get CategoryFilterSlider() {
    return <CategoryFilterSlider />
  }

  get TopTenRestaurants() {
    const onCardPress = () => openRestaurantDetailModal(this.props.componentId)
    return (
      <View style={[Grids.marLeftSm]}>
        <View style={[Grids.row, Grids.marRightSm]}>
          <TextFont className="black headline3">{lang.topTenRestaurants}</TextFont>
          <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
        </View>
        <FlatList
          data={['1', '2', '3']}
          horizontal
          keyExtractor={item => item}
          renderItem={() => <Card onPress={onCardPress} />}
        />
      </View>
    )
  }

  get BestDealsOfTheDay() {
    const onCardPress = () => openRestaurantDetailModal(this.props.componentId)
    return (
      <View style={[Grids.marTopLg, Grids.marLeftSm, Grids.marBot]}>
        <View style={[Grids.row, Grids.marRightSm]}>
          <TextFont className="black headline3">{lang.bestDealOfTheDay}</TextFont>
          <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
        </View>
        <FlatList
          data={['1', '2', '3']}
          horizontal
          keyExtractor={item => item}
          renderItem={() => <Card onPress={onCardPress} />}
        />
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={{ marginTop: -20, backgroundColor: '#fafafa' }}>
        <StatusBar barStyle="light-content" />
        {this.Header}
        {this.CategoryFilterSlider}
        {this.TopTenRestaurants}
        {this.BestDealsOfTheDay}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  greetText: getGreetText(state),
  currentLocation: getCurrentLocation(state),
})

const mapDispatchToProps = dispatch => ({
  markedAsSubsequenceUse: () => dispatch(markedAsSubsequenceUse()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard)
