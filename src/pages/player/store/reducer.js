import { Map } from 'immutable'
import * as actionType from './actionType'
// 使用immutable管理state

const defaultState = Map({
  currentSong: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    default:
      return state
  }
}

export default reducer
