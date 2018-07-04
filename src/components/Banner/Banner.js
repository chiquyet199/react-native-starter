import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { Styles } from 'styles'

class Banner extends React.Component {
  state = {
    activeSlide: 0,
    data: [1, 2, 3],
  }
  get pagination() {
    const { data, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ position: 'absolute', left: 0, right: 0, bottom: 10 }}
        dotStyle={Styles.activeDotStyle}
        inactiveDotStyle={Styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    )
  }
  renderItems = () => {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <View>
        <Image style={{ height: 193, width: viewportWidth }} source={require('assets/images/banner-1.png')} />
      </View>
    )
  }

  setActiveSlide = index => this.setState({ activeSlide: index })

  onSnapToItem = index => {
    this.setActiveSlide(index)
  }
  render() {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <View>
        <Carousel
          data={this.state.data}
          renderItem={this.renderItems}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{ width: viewportWidth }}
          onSnapToItem={this.onSnapToItem}
          inactiveSlideOpacity={0.7}
          inactiveSlideScale={1}
        />
        {this.pagination}
      </View>
    )
  }
}

export default Banner
