import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

class Animatable extends React.Component {
  constructor(props) {
    super(props)
    this.initialAnimatedValue()
  }

  static propTypes = {
    children: PropTypes.any,
    startValue: PropTypes.number,
    getAnimatedStyle: PropTypes.func.isRequired,
    animateOnMount: PropTypes.bool,
    duration: PropTypes.number,
  }

  static defaultProps = {
    startValue: 0,
    animateOnMount: false,
    children: null,
    duration: 400,
  }

  componentDidMount() {
    this.props.animateOnMount && this.animate()
  }

  componentWillReceiveProps() {
    console.log('new props')
    this.animatedValue.setValue(0)
    this.animate()
  }

  animate = () => {
    console.log(this.animatedValue)
    Animated.timing(this.animatedValue, { duration: this.props.duration, toValue: 1 }).start()
  }

  initialAnimatedValue = () => {
    this.animatedValue = new Animated.Value(this.props.startValue)
  }

  render() {
    return (
      <Animated.View {...this.props} style={this.props.getAnimatedStyle(this.animatedValue)}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default Animatable
