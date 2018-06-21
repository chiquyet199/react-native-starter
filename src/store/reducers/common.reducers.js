import immutable from 'seamless-immutable'
import { LOADING } from 'actions/common.actions'

const initialState = immutable.from({
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
