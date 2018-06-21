import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import common from 'assets/styles/common'
import { fetchData } from 'actions/data'
import { Container, Greeter, Loading, Header, Row } from 'components'

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
      <Container center>
        <Header onSettingPress={this.onSettingPress} />
        <Greeter greetText={greetText} />
        <Row rtl style={[common.padVertSm, { flexWrap: 'wrap' }]}>
          <View style={{ width: 100, height: 40, backgroundColor: 'red' }} />
          <View style={{ width: 100, height: 20, backgroundColor: 'blue' }} />
          <View style={{ width: 100, height: 40, backgroundColor: 'red' }} />
          <View style={{ width: 100, height: 20, backgroundColor: 'blue' }} />
          <View style={{ width: 100, height: 40, backgroundColor: 'red' }} />
          <View style={{ width: 100, height: 20, backgroundColor: 'blue' }} />
          <View style={{ width: 100, height: 40, backgroundColor: 'red' }} />
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.common.toJS().loading,
  greetText: state.data.toJS().greetText,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
