import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import { Styles, Grids } from 'styles'
import { TextFont } from 'components'

const WelcomeSlide = props => {
  const { header, subHeader, icon, background } = props
  const headerStyle = [{}]
  const subHeaderStyle = [Grids.marTop, { width: '80%' }]
  const iconStyle = [Grids.marTop, { width: 57, height: 57 }]
  return (
    <View>
      <Image style={[Styles.fullHeight, Styles.fullWidth]} source={background} />
      <View style={[Styles.absoluteFull, Grids.padLg]}>
        <View style={[Grids.flex1, { justifyContent: 'center' }]}>
          <View style={headerStyle}>
            <TextFont className="white light headline2">{header}</TextFont>
          </View>
          <View style={subHeaderStyle}>
            <TextFont className="white body">{subHeader ? subHeader.toUpperCase() : ''}</TextFont>
          </View>
          {icon && <Image style={iconStyle} source={icon} />}
        </View>
      </View>
    </View>
  )
}

WelcomeSlide.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  background: PropTypes.any.isRequired,
  icon: PropTypes.any,
}

WelcomeSlide.defaultProps = {
  icon: null,
}

export default WelcomeSlide
