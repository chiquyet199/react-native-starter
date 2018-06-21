import { combineReducers } from 'redux'
import common from './common.reducers'
import data from './data.reducers'

export default combineReducers({
  common,
  data,
})
