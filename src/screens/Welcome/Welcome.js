import React from 'react'
import { View } from 'react-native'

import { openMainPage } from 'services/navigation'
import { TextFont, Button } from 'components'

const Welcome = () => (
  <View>
    <TextFont className="black headline1">This is welcome page</TextFont>
    <Button onPress={openMainPage} label="Go to dashboard" />
  </View>
)

export default Welcome
