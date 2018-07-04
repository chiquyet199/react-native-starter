import React, { Component } from 'react'
import { View } from 'react-native'

import { TextFont } from 'components'

class SideMenu extends Component {
  render() {
    return (
      <View>
        <TextFont className="headline4 black">Menu1</TextFont>
        <TextFont className="headline4 black">Menu2</TextFont>
        <TextFont className="headline4 black">Menu3</TextFont>
        <TextFont className="headline4 black">Menu4</TextFont>
        <TextFont className="headline4 black">Menu5</TextFont>
      </View>
    )
  }
}

export default SideMenu
