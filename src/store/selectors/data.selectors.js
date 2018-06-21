import { createSelector } from 'reselect'

const getText = state => state.data.greetText

export const getGreetText = createSelector([getText], text => text)
