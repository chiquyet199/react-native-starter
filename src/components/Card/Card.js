import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import { Colors, Grids } from 'styles'
import TextFont from '../TextFont/TextFont'

const Rating = () => (
  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
    <Image style={{ width: 10, height: 10 }} source={require('assets/images/ico-star-filled.png')} />
    <Image style={{ width: 10, height: 10 }} source={require('assets/images/ico-star-filled.png')} />
    <Image style={{ width: 10, height: 10 }} source={require('assets/images/ico-star-filled.png')} />
    <Image style={{ width: 10, height: 10 }} source={require('assets/images/ico-star-filled.png')} />
    <Image style={{ width: 10, height: 10 }} source={require('assets/images/ico-star-empty.png')} />
  </View>
)

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Yellow Spoon Pastry',
  }

  get HeaderImage() {
    return (
      <View style={{ height: 139, backgroundColor: 'black', position: 'relative' }}>
        <Image
          source={require('assets/images/restaurant1.png')}
          style={{ width: 240, height: 139, position: 'absolute', top: 0, left: -5 }}
        />
      </View>
    )
  }

  get Content() {
    const { title } = this.props
    return (
      <View style={[Grids.padVertSm, Grids.padHor]}>
        <View style={[Grids.row, { alignItems: 'flex-start' }]}>
          <View style={[Grids.flex1]}>
            <TextFont style={{ fontSize: 16, lineHeight: 18 }} className="headline4 black">
              {title}
            </TextFont>
          </View>
          <View style={[{ marginTop: 11 }]}>
            <Rating />
          </View>
        </View>
        <View style={{ width: '70%', marginTop: 11 }}>
          <TextFont style={{ fontSize: 10, lineHeight: 12 }} className="smallText grey">
            Desserts / 200 - 300 THB Ekkamai 1.4 km{' '}
          </TextFont>
        </View>
      </View>
    )
  }

  get CommentIcon() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          borderWidth: 1,
          borderColor: Colors.grey,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      >
        <View style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 16, height: 13 }} resizeMode="cover" source={require('assets/images/ico-comment.png')} />
          <TextFont className="smallText grey">80</TextFont>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          width: 232,
          marginRight: 11,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Colors.grey,
          overflow: 'hidden',
        }}
      >
        {this.HeaderImage}
        {this.Content}
        {this.CommentIcon}
      </View>
    )
  }
}

export default Card
