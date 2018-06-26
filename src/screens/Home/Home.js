import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'

import { fetchData } from 'actions/data.actions'
import { getLoadingStatus } from 'store/selectors/common.selectors'
import { getGreetText } from 'store/selectors/data.selectors'
import { Greeter, Loading, TextFont, Button } from 'components'
import { Grids, Colors } from 'styles'

class Home extends Component {
  static propTypes = {
    greetText: PropTypes.string,
    fetchData: PropTypes.func,
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    greetText: '',
    fetchData: null,
    isLoading: false,
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const { greetText, isLoading } = this.props

    if (isLoading) {
      return Loading()
    }

    return (
      <ScrollView>
        <Greeter greetText={greetText} />
        <Button label="Confirm" />
        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.grey }]} />
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.black }]} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.grey, overflow: 'hidden' }]}>
            <Button label="Confirm" />
          </View>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.black, overflow: 'hidden' }]}>
            <Button label="Button with very long text" />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.grey, overflow: 'hidden' }]}>
            <Button className="small white" label="Confirm" />
          </View>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.black, overflow: 'hidden' }]}>
            <Button className="small white" label="Button with very long text" />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.grey, overflow: 'hidden' }]}>
            <Button className="transparent" label="Confirm" />
          </View>
          <View style={[Grids.flex1, { padding: 10, backgroundColor: Colors.black, overflow: 'hidden' }]}>
            <Button className="transparent" label="Button with very long text" />
          </View>
        </View>
        <View style={{ height: 20 }} />
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
