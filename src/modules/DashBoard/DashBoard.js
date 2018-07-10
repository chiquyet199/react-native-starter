import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, View, StatusBar, FlatList } from 'react-native'

import routes from 'configs/routes'
import { Grids } from 'styles'
import { navigate } from 'services/navigation'
import { fetchData } from 'actions/data.actions'
import { getLoadingStatus } from 'store/selectors/common.selectors'
import { getGreetText } from 'store/selectors/data.selectors'
import { Header, Banner, Card, TextFont } from 'components'
import { CategoryFilterSlider } from 'modules/DashBoard/components'
import lang from 'lang'

class DashBoard extends Component {
  static propTypes = {
    fetchData: PropTypes.func,
  }

  static defaultProps = {
    fetchData: null,
  }

  componentDidMount() {
    this.props.fetchData()
  }

  goToAbout = () => {
    navigate(routes.About)
  }

  get Header() {
    return (
      <View>
        <Banner />
        <View style={{ position: 'absolute', top: 16, left: 0, right: 0 }}>
          <Header />
        </View>
      </View>
    )
  }

  get CategoryFilterSlider() {
    return <CategoryFilterSlider />
  }

  get TopTenRestaurants() {
    return (
      <View style={[Grids.marLeftSm]}>
        <View style={[Grids.row, Grids.marRightSm]}>
          <TextFont className="black headline3">{lang.topTenRestaurants}</TextFont>
          <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
        </View>
        <FlatList data={[1, 2, 3]} horizontal renderItem={item => <Card key={item} />} />
      </View>
    )
  }

  get BestDealsOfTheDay() {
    return (
      <View style={[Grids.marTopLg, Grids.marLeftSm]}>
        <View style={[Grids.row, Grids.marRightSm]}>
          <TextFont className="black headline3">{lang.bestDealOfTheDay}</TextFont>
          <TextFont className="black bodyText light">{lang.viewMore}</TextFont>
        </View>
        <FlatList data={[1, 2, 3]} horizontal renderItem={item => <Card key={item} />} />
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
  isLoading: getLoadingStatus(state),
  greetText: getGreetText(state),
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard)
