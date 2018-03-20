import * as types from './mutation-types'

export const setMyData = ({ commit }, payload) => {
  commit('types.setMyData', payload)
}
