import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { TextFont } from 'components'
import grids from 'styles/grids'
import TabIndicator from './TabIndicator'

class Tabs extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    activeTabIdx: PropTypes.number,
  }

  static defaultProps = {
    activeTabIdx: 0,
  }

  state = {
    activeTabIdx: this.props.activeTabIdx,
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
      <TouchableOpacity onPress={updateActiveTab} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>
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
          <View style={[grids.row, grids.pad]}>{data.map(this.renderTitle)}</View>
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
