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
    animateOnNewProps: PropTypes.bool,
    duration: PropTypes.number,
    delay: PropTypes.number,
  }

  static defaultProps = {
    startValue: 0,
    animateOnMount: false,
    animateOnNewProps: false,
    children: null,
    duration: 400,
    delay: 0,
  }

  componentDidMount() {
    this.props.animateOnMount && setTimeout(this.animate, this.props.delay)
  }

  componentWillReceiveProps() {
    if (this.props.animateOnNewProps) {
      this.animatedValue.setValue(0)
      this.animate()
    }
  }

  animate = () => {
    console.log('animated')
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
