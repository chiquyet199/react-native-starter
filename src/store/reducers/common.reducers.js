import immutable from 'seamless-immutable'
import { LOADING, LOCATION_PERMISSION, CURRENT_LOCATION } from 'store/actions/common.actions'

const initialState = immutable.from({
  loading: false,
  locationPermission: '',
  currentLocation: null,
})

const commonReducerHandlers = {
  [LOADING]: ({ state, payload }) => state.set('loading', payload),
  [CURRENT_LOCATION]: ({ state, payload }) => state.set('currentLocation', payload),
  [LOCATION_PERMISSION]: ({ state, payload }) => state.set('locationPermission', payload),
}

export default (state = initialState, action) => {
  const { payload, type } = action
  const reducerHander = commonReducerHandlers[type]
  return reducerHander ? reducerHander({ state, payload }) : state
}
