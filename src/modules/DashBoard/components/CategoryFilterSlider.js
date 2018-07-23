import React from 'react'
import { View } from 'react-native'

import { Grids } from 'styles'
import { fadeAndSlideup } from 'configs/animations'
import { Icon, TrailingAnimation } from 'components'

class CategoryFilterSlider extends React.Component {
  render() {
    return (
      <View style={{ position: 'relative', height: 50 }}>
        <TrailingAnimation
          delay={1000}
          getAnimatedStyle={fadeAndSlideup}
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
