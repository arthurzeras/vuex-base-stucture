import * as types from './mutation-types'

export default {
  [types.setMyData] (state, data) {
    state.myData = data
  }
}
