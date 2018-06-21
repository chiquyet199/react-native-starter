import { createSelector } from 'reselect'

const getLoading = state => state.common.toJS().isLoading

export const getLoadingStatus = createSelector([getLoading], isLoading => isLoading)
