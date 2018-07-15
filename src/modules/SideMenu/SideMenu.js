import React, { Component } from 'react'
import { View, Image } from 'react-native'

import lang from 'lang'
import { Grids, Styles } from 'styles'
import { TextFont } from 'components'

import MenuItem from './MenuItem'

class SideMenu extends Component {
  render() {
    return (
      <View style={[Styles.bgWhite, Grids.flex1]}>
        <View style={{ height: 170, width: '100%' }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
            source={require('assets/images/side-menu-background.png')}
          />
        </View>
        <View style={[Styles.bgWhite, Grids.pad]}>
          <MenuItem text={lang.home} icon={require('assets/images/ico-home.png')} />
          <MenuItem text={lang.myBooking} icon={require('assets/images/ico-my-booking.png')} />
          <MenuItem text={lang.wishlist} icon={require('assets/images/ico-wishlist.png')} />
          <MenuItem text={lang.myFoodPlan} icon={require('assets/images/ico-food-plan.png')} />
          <MenuItem text={lang.newLetterAndPromo} icon={require('assets/images/ico-newletter.png')} />
          <View style={[Grids.row, Grids.marTopMd]}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 20, height: 20, marginRight: 16 }}
                resizeMode="contain"
                source={require('assets/images/ico-languages.png')}
              />
              <TextFont className="black">{lang.settingLang}</TextFont>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TextFont className="black">{lang.english}</TextFont>
              <Image
                style={{ width: 20, height: 20, marginLeft: 16 }}
                resizeMode="contain"
                source={require('assets/images/flag-en.png')}
              />
            </View>
          </View>
          <View style={[Grids.row, Grids.marTopMd]}>
            <TextFont className="black">{lang.logout}</TextFont>
          </View>
        </View>
      </View>
    )
  }
}

export default SideMenu
