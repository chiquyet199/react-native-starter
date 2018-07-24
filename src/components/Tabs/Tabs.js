import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'

import { Grids } from 'styles'
import { fadeAndSlideLeft } from 'configs/animations'
import { TextFont, Animatable } from 'components'
import TabIndicator from './TabIndicator'

class Tabs extends Component {
  static propTypes = {
    delayAnimation: PropTypes.number,
    data: PropTypes.array.isRequired,
    activeTabIdx: PropTypes.number,
  }

  static defaultProps = {
    delayAnimation: 0,
    activeTabIdx: 0,
  }

  state = {
    activeTabIdx: this.props.activeTabIdx,
  }

  componentDidMount() {
    console.log('mount tabs')
    setTimeout(this.animatableTitle.animate, this.props.delayAnimation)
  }

  renderTitle = (item, idx) => {
    const { activeTabIdx } = this.state
    const { title, renderTitle } = item
    const titleStyle = 'grey'
    const activeTitleStyle = 'black'
    const updateActiveTab = () => {
      this.setState({ activeTabIdx: idx })
    }
    return (
      <TouchableOpacity key={title} onPress={updateActiveTab} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>
        {renderTitle ? (
          renderTitle(item, idx)
        ) : (
          <TextFont className={activeTabIdx === idx ? activeTitleStyle : titleStyle}>{title.toUpperCase()}</TextFont>
        )}
      </TouchableOpacity>
    )
  }

  renderContent = item => {
    const { renderContent } = item
    return <View>{renderContent}</View>
  }

  render() {
    const { data } = this.props
    const { activeTabIdx } = this.state
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View>
          <Animatable ref={node => (this.animatableTitle = node)} getAnimatedStyle={fadeAndSlideLeft} duration={400}>
            <View style={[Grids.row, Grids.pad]}>{data.map(this.renderTitle)}</View>
          </Animatable>
          <View style={{ backgroundColor: 'grey', height: 1, width: '100%' }} />
          <TabIndicator
            activeTabIdx={activeTabIdx}
            ref={node => {
              this.tabIndicator = node
            }}
          />
        </View>
        {data[activeTabIdx].renderContent()}
      </View>
    )
  }
}

export default Tabs
