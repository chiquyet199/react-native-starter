import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, ImageBackground } from 'react-native'

import { Grids, Colors } from 'styles'
import { TextFont } from 'components'

class MenuItem extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <View style={[{ width: 150, borderColor: Colors.lightGrey, borderWidth: 1 }]}>
        <ImageBackground style={{ width: 150, height: 110 }} source={require('assets/images/menu.jpg')} />
        <View style={[Grids.padSm]}>
          <TextFont className="black headline4">Cucamber thai</TextFont>
          <TextFont className="grey">Price: 200 THB</TextFont>
        </View>
      </View>
    )
  }
}

export default MenuItem
