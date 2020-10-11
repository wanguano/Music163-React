import { Map } from 'immutable'
import * as actionType from './actionType'
// 使用immutable管理state

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionType.CHANGE_PLAY_LIST: 
      return state.set('playList', action.playList)
    case actionType.CHANGE_CURRENT_SONG_INDEX: 
      return state.set('currentSongIndex', action.index)
    default:
      return state
  }
}

export default reducer
