import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import { Grids } from 'styles'
import { TextFont, Rating } from 'components'

class ReviewItem extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <View style={[Grids.row, Grids.marVertSm]}>
        <View style={[Grids.row]}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            resizeMode="cover"
            source={require('assets/images/ava.png')}
          />
          <View style={[Grids.marLeft]}>
            <TextFont className="black">Nichal Ray</TextFont>
            <TextFont className="black">Im very enjoy this restaurant</TextFont>
          </View>
        </View>
        <View>
          <Rating />
          <TextFont className="black">13 Jun 2018</TextFont>
        </View>
      </View>
    )
  }
}

export default ReviewItem
