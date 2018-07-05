import React from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'

import { View, Image } from 'react-native'

class Rating extends React.Component {
  static propTypes = {
    rate: PropTypes.number,
  }

  static defaultProps = {
    rate: 0,
  }

  validRate = () => this.props.rate >= 0 && this.props.rate <= 5

  render() {
    const containerStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }
    const starStyle = { width: 10, height: 10 }
    const filledStar = this.validRate() ? this.props.rate : 0
    const emptyStars = 5 - filledStar
    return (
      <View style={containerStyle}>
        {times(filledStar, item => <Image key={item} style={starStyle} source={require('assets/images/ico-star-filled.png')} />)}
        {times(emptyStars, item => <Image key={item} style={starStyle} source={require('assets/images/ico-star-empty.png')} />)}
      </View>
    )
  }
}

export default Rating
