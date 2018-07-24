import React from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions } from 'react-native'

import { Animatable } from 'components'

class TabIndicator extends React.Component {
  static propTypes = {
    activeTabIdx: PropTypes.number.isRequired,
  }

  state = {
    prevActiveIdx: this.props.activeTabIdx,
    activeTabIdx: this.props.activeTabIdx,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTabIdx !== this.props.activeTabIdx) {
      this.setState({ prevActiveIdx: this.state.activeTabIdx, activeTabIdx: nextProps.activeTabIdx })
    }
  }

  getAnimatedStyle = animatedValue => {
    const { activeTabIdx, prevActiveIdx } = this.state
    const { width: viewportWidth } = Dimensions.get('window')
    return {
      left: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [prevActiveIdx * (viewportWidth / 3), activeTabIdx * (viewportWidth / 3)],
      }),
    }
  }

  render() {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <Animatable animateNewProps getAnimatedStyle={this.getAnimatedStyle} duration={300}>
        <View style={{ position: 'absolute', width: viewportWidth / 3, bottom: -1, height: 3, backgroundColor: 'black' }} />
      </Animatable>
    )
  }
}

export default TabIndicator
