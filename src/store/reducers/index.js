import { combineReducers } from 'redux'
import common from './common.reducers'
import data from './data.reducers'

export default combineReducers({
  common,
  data,
})

// const applicationState = {
//   common: {
//     isLoading: false,
//     accessLocationGranted: false,
//     location: { lat: '', lng: '', city: '' },
//   },
//   data: {},
// }
