import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'

import logger from 'services/logger'

global.storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,

  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return
  // the latest data.
  sync: {
    // we'll talk about the details later.
  },
})

export const storageKey = {
  FIRST_USE: 'firstUseApp',
  LATEST_LOCATION: 'latestAppUseLocation',
}

async function set(key, data) {
  await global.storage.save({
    key,
    data,
  })
}
async function get(key) {
  let data = null
  try {
    data = await global.storage.load({ key })
    return data
  } catch (err) {
    return data
  }
}

async function clear() {
  try {
    const keys = Object.keys(storageKey)
    const remove = key => {
      global.storage.remove({ key: storageKey[key] })
    }
    keys.forEach(remove)
  } catch (err) {
    logger.error(err)
  }
}

export default { set, get, clear }
