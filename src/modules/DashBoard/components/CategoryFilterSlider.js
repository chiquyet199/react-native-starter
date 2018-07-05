import React from 'react'
import { View } from 'react-native'

import { Icon, TrailingAnimation } from 'components'
import { Grids } from 'styles'

class CategoryFilterSlider extends React.Component {
  getAnimatedStyle = animatedValue => ({
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [30, 0],
        }),
      },
    ],
  })

  render() {
    return (
      <View style={{ position: 'relative', height: 50 }}>
        <TrailingAnimation
          getAnimatedStyle={this.getAnimatedStyle}
          style={[Grids.row, { paddingHorizontal: 10, position: 'absolute', left: 0, right: 0, top: -25 }]}
        >
          <Icon src={require('assets/images/ico-coffee.png')} />
          <Icon src={require('assets/images/ico-delivery.png')} />
          <Icon src={require('assets/images/ico-discount.png')} />
          <Icon src={require('assets/images/ico-bakery.png')} />
          <Icon src={require('assets/images/ico-nearby.png')} />
        </TrailingAnimation>
      </View>
    )
  }
}

export default CategoryFilterSlider
