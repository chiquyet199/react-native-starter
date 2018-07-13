import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity } from 'react-native'

import { Grids } from 'styles'
import { openSideMenu } from 'services/navigation'
import { TextFont, Animatable } from 'components'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    parentId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'Bangkok',
  }

  getAnimatedStyle = animatedValue => ({
    opacity: animatedValue,
    transform: [
      {
        // translateX: animatedValue.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: [100, 0],
        // }),
        scale: animatedValue,
      },
    ],
  })

  get BuggerMenu() {
    const buggerMenuStyle = [{ width: 20, height: 20 }]
    return (
      <TouchableOpacity onPress={this.onBuggerMenuPress}>
        <Image style={buggerMenuStyle} source={require('assets/images/ico-burger-menu.png')} />
      </TouchableOpacity>
    )
  }

  get Title() {
    return <TextFont className="headline3 white">{this.props.title}</TextFont>
  }

  get SearchAndFilter() {
    const utilsIconStyle = [{ width: 15, height: 15, marginLeft: 8 }]
    return (
      <View style={[Grids.row]}>
        <TouchableOpacity onPress={this.onSearchIconPress}>
          <Image style={utilsIconStyle} source={require('assets/images/ico-search.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFilterIconPress}>
          <Image style={utilsIconStyle} source={require('assets/images/ico-filter.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  onBuggerMenuPress = () => {
    openSideMenu(this.props.parentId)
  }

  onSearchIconPress = () => {}
  onFilterIconPress = () => {}

  render() {
    const headerStyle = [Grids.row, Grids.padSm]
    return (
      <Animatable getAnimatedStyle={this.getAnimatedStyle} duration={1000}>
        <View style={headerStyle}>
          {this.BuggerMenu}
          {this.Title}
          {this.SearchAndFilter}
        </View>
      </Animatable>
    )
  }
}

export default Header
