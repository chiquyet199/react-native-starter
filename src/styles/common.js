import { StyleSheet, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
  fullWidth: {
    width: DEVICE_WIDTH,
  },
  fullHeight: {
    height: DEVICE_HEIGHT,
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
