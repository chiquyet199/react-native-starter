import React from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { Styles } from 'styles'

class SliderBanner extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItems: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  state = {
    activeSlide: 0,
  }

  get pagination() {
    const { activeSlide } = this.state
    const { data } = this.props
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

  setActiveSlide = index => this.setState({ activeSlide: index })

  onSnapToItem = index => {
    this.setActiveSlide(index)
  }

  render() {
    const { width: viewportWidth } = Dimensions.get('window')
    return (
      <View>
        <Carousel
          data={this.props.data}
          renderItem={this.props.renderItems}
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

export default SliderBanner
