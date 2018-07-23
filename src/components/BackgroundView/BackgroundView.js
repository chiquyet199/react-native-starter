import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {},
  bgImage: StyleSheet.absoluteFillObject,
})

class BackgroundView extends Component {
  static propTypes = {
    children: PropTypes.any,
    bgUrl: PropTypes.any.isRequired,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children, bgUrl } = this.props
    return (
      <View {...this.props}>
        <Image resizeMode="cover" style={[styles.bgImage, { width: '100%', height: '100%' }]} source={bgUrl} />
        {children}
      </View>
    )
  }
}

export default BackgroundView
