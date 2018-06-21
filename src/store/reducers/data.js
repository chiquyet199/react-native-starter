import immutable from 'immutable'
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from 'actions/data'

const initialState = immutable.fromJS({ text: '' })

const dataReducerHandlers = {
  [FETCH_DATA_FAIL]: (state, payload) => {
    console.log(payload)
  },
  [FETCH_DATA_SUCCESS]: (state, payload) => immutable.fromJS(payload),
}

export default (state = initialState, action) => {
  const reducerHander = dataReducerHandlers[action.type]
  return reducerHander ? reducerHander(state, action.payload) : state
}
