import { StyleSheet, Dimensions } from 'react-native'
import Colors from './colors'

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
  activeDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: 'transparent',
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgBlack: {
    backgroundColor: Colors.black,
  },
})
