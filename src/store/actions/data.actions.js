import Api from 'services/api'
import { toggleLoading } from './common.actions'

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export function fetchData() {
  return async dispatch => {
    dispatch(toggleLoading(true))
    try {
      const data = await Api.fetchData()
      dispatch(toggleLoading(false))
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
    } catch (err) {
      dispatch(toggleLoading(false))
      dispatch({ type: FETCH_DATA_FAIL, payload: err })
    }
    // Api.fetchData()
    //   .then(response => {
    //     dispatch(toggleLoading(false))
    //     dispatch({ type: FETCH_DATA_SUCCESS, payload: response })
    //   })
    //   .catch(err => {
    //     dispatch(toggleLoading(false))
    //     dispatch({ type: FETCH_DATA_FAIL, payload: err })
    //   })
  }
}
