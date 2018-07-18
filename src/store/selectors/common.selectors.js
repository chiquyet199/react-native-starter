import { createSelector } from 'reselect'

const loadingSelector = state => state.common.isLoading
const currentLocationSelector = state => state.common.currentLocation

export const getLoading = createSelector([loadingSelector], isLoading => isLoading)
export const getCurrentLocation = createSelector([currentLocationSelector], currentLocation => currentLocation)
