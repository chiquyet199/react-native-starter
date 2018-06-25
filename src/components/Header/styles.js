import StyleSheet from 'react-native-extended-stylesheet'
import { Colors } from 'styles'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.$orange,
    left: 0,
    top: 0,
    right: 0,
    '@media ios': {
      paddingTop: 20,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
})
