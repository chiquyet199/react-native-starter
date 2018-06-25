import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import { fetchData } from 'actions/data.actions'
import { getLoadingStatus } from 'store/selectors/common.selectors'
import { getGreetText } from 'store/selectors/data.selectors'
import { Greeter, Loading, Header, TextFont } from 'components'

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    greetText: PropTypes.string,
    fetchData: PropTypes.func,
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    navigation: null,
    greetText: '',
    fetchData: null,
    isLoading: false,
  }

  componentDidMount() {
    this.props.fetchData()
  }

  onSettingPress = () => {
    this.props.navigation.navigate('Settings', {
      customData: 'this string was pass from Home Page',
    })
  }

  render() {
    const { greetText, isLoading } = this.props

    if (isLoading) {
      return Loading()
    }

    return (
      <ScrollView>
        <Header onSettingPress={this.onSettingPress} />
        <Greeter greetText={greetText} />
        <TextFont className="light smallText">Hello world</TextFont>
        <TextFont className="regular smallText">Hello world</TextFont>
        <TextFont className="bold smallText">Hello world</TextFont>
        <TextFont className="light bodyText">Hello world</TextFont>
        <TextFont className="regular bodyText">Hello world</TextFont>
        <TextFont className="bold bodyText">Hello world</TextFont>
        <TextFont className="light headline4">Hello world</TextFont>
        <TextFont className="regular headline4">Hello world</TextFont>
        <TextFont className="bold headline4">Hello world</TextFont>
        <TextFont className="light headline3">Hello world</TextFont>
        <TextFont className="regular headline3">Hello world</TextFont>
        <TextFont className="bold headline3">Hello world</TextFont>
        <TextFont className="light headline2">Hello world</TextFont>
        <TextFont className="regular headline2">Hello world</TextFont>
        <TextFont className="bold headline2">Hello world</TextFont>
        <TextFont className="light headline1">Hello world</TextFont>
        <TextFont className="regular headline1">Hello world</TextFont>
        <TextFont className="bold headline1">Hello world</TextFont>
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
)(Home)
