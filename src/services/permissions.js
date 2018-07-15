import { PermissionsAndroid } from 'react-native'

async function requestLocationPermission() {
  try {
    // if (Platform.OS === 'ios') {
    //   const getCurrentPosition = get(navigator, 'geolocation.getCurrentPosition')
    //   if (isFunction(getCurrentPosition)) {
    //     getCurrentPosition(position => position, () => {})
    //   }
    // } else {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Access Location',
      message: "Allow Food Advisor to access this device's location",
    })
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera')
    } else {
      console.log('Camera permission denied')
    }
  } catch (err) {
    console.warn(err)
  }
}

export default { requestLocationPermission }
