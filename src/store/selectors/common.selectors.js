import { createSelector } from 'reselect'

const getLoading = state => state.common.isLoading

export const getLoadingStatus = createSelector([getLoading], isLoading => isLoading)
