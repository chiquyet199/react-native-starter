import { PermissionsAndroid, Platform } from 'react-native'
import logger from 'services/logger'

async function requestLocationPermission() {
  try {
    if (Platform.OS === 'ios') {
      navigator.geolocation.requestAuthorization()
    } else {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Access Location',
        message: "Allow Food Advisor to access this device's location",
      })
    }
  } catch (err) {
    logger.info(err)
  }
}

export default { requestLocationPermission }
