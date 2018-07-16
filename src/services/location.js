import { PermissionsAndroid, Platform } from 'react-native'
import logger from 'services/logger'

async function requestPermission() {
  try {
    navigator.geolocation.setRNConfiguration({ skipPermissionRequests: true })
    if (Platform.OS === 'ios') {
      navigator.geolocation.getCurrentPosition(res => {
        console.log(res)
      })
    } else {
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Access Location',
        message: "Allow Food Advisor to access this device's location",
      })
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          res => {
            console.log(res)
          },
          null,
          { timeout: 3000, enableHighAccuracy: true },
        )
      }
    }
  } catch (err) {
    logger.info(err)
  }
}

export default { requestPermission }
