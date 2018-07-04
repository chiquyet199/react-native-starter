import React from 'react'
import { View, Animated } from 'react-native'

import { Icon } from 'components'
import { Grids } from 'styles'

class CategoryFilterSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(this.startAnimation, 300)
  }

  startAnimation = () => {
    Animated.stagger(100, [this.animate1, this.animate2, this.animate3, this.animate4, this.animate5]).start()
  }

  get animate1() {
    return Animated.spring(this.state.animated1, {
      toValue: 1,
      duration: 400,
    })
  }
  get animate2() {
    return Animated.spring(this.state.animated2, {
      toValue: 1,
      duration: 400,
    })
  }
  get animate3() {
    return Animated.spring(this.state.animated3, {
      toValue: 1,
      duration: 400,
    })
  }
  get animate4() {
    return Animated.spring(this.state.animated4, {
      toValue: 1,
      duration: 400,
    })
  }
  get animate5() {
    return Animated.spring(this.state.animated5, {
      toValue: 1,
      duration: 400,
    })
  }

  render() {
    return (
      <View style={{ position: 'relative' }}>
        <View style={[Grids.row, { paddingHorizontal: 10, position: 'absolute', left: 0, right: 0, top: -25 }]}>
          <Animated.View
            style={{
              opacity: this.state.animated1,
              transform: [
                {
                  translateY: this.state.animated1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            }}
          >
            <Icon src={require('assets/images/ico-coffee.png')} />
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.animated2,
              transform: [
                {
                  translateY: this.state.animated2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            }}
          >
            <Icon src={require('assets/images/ico-delivery.png')} />
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.animated3,
              transform: [
                {
                  translateY: this.state.animated3.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            }}
          >
            <Icon src={require('assets/images/ico-discount.png')} />
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.animated4,
              transform: [
                {
                  translateY: this.state.animated4.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            }}
          >
            <Icon src={require('assets/images/ico-bakery.png')} />
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.animated5,
              transform: [
                {
                  translateY: this.state.animated5.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            }}
          >
            <Icon src={require('assets/images/ico-nearby.png')} />
          </Animated.View>
        </View>
      </View>
    )
  }
}

export default CategoryFilterSlider
