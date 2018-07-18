import { PermissionsAndroid, Platform } from 'react-native'
import axios from 'axios'
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
  const response = await axios.get(url)
  const { results } = response.data
  if (results[9]) {
    const addressComponents = results[9].address_components
    return {
      address: {
        city: addressComponents[0].long_name,
        country: addressComponents[1].long_name,
      },
      formatedAddress: results[0].formatted_address,
    }
  }
  return null
}

export default { requestPermission, getCurrentLocation, getAddress }
