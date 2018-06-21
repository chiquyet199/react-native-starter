import immutable from 'immutable'
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from 'actions/data'

const initialState = immutable.fromJS({ text: '' })

const fetchDataFailHandler = ({ payload }) => {
  console.log(payload)
}

const fetchDataSuccessHandler = ({ payload }) => immutable.fromJS(payload)

const dataReducerHandlers = {
  [FETCH_DATA_FAIL]: fetchDataFailHandler,
  [FETCH_DATA_SUCCESS]: fetchDataSuccessHandler,
}

export default (state = initialState, action) => {
  const { payload, type } = action
  const reducerHander = dataReducerHandlers[type]
  return reducerHander ? reducerHander({ state, payload }) : state
}
