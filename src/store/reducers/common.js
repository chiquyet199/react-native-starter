import immutable from 'immutable'
import { LOADING } from 'actions/common'

const initialState = immutable.fromJS({
  loading: false,
})

const commonReducerHandlers = {
  [LOADING]: ({ state, payload }) => state.set('loading', payload),
}

export default (state = initialState, action) => {
  const { payload, type } = action
  const reducerHander = commonReducerHandlers[type]
  return reducerHander ? reducerHander({ state, payload }) : state
}
