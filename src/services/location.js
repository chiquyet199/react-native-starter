import { PermissionsAndroid, Platform } from 'react-native'
import api from 'services/api'
import logger from 'services/logger'

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      navigator.geolocation.requestAuthorization()
    } else {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Access Location',
        message: "Allow Food Advisor to access this device's location",
      })
    }
  } catch (err) {
    logger.error(err)
  }
}

async function getCurrentLocation() {
  const asyncAwaitGetCurrentPosition = () =>
    new Promise((resolve, reject) => {
      const onSuccess = res => resolve(res.coords)
      const onFailed = () => reject({})
      try {
        navigator.geolocation.getCurrentPosition(onSuccess, onFailed)
      } catch (err) {
        logger.info(err)
        onFailed()
      }
    })
  return asyncAwaitGetCurrentPosition()
}

async function getAddress(coords) {
  const myApiKey = 'AIzaSyBPx-WtX075myBrUQ_ACyoKikvUd6cbY4g'
  const { latitude, longitude } = coords
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${myApiKey}`
  const response = await api.get(url)
  const addressComponents = response.data.results[0].address_components
  const toTypes = (target, item) => ({ ...target, [`${item.types[0]}`]: item })
  const addressComponentsByTypes = addressComponents.reduce(toTypes, {})
  return {
    city: addressComponentsByTypes['administrative_area_level_1'].long_name,
    country: addressComponentsByTypes['country'].long_name,
  }
}

export default { requestPermission, getCurrentLocation, getAddress }
