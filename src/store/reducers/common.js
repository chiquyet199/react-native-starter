import { LOADING } from 'actions/common'
import immutable from 'immutable'

const initialState = immutable.fromJS({
  loading: false,
})

const commonReducerHandlers = {
  [LOADING]: (state, payload) => state.set('loading', payload),
}

export default (state = initialState, action) => {
  const reducerHandler = commonReducerHandlers[action.type]
  return reducerHandler ? reducerHandler(state, action.payload) : state
}
