import { createSelector } from 'reselect'

const getText = state => state.data.toJS().greetText

export const getGreetText = createSelector([getText], text => text)
