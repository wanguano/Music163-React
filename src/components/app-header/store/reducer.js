import {Map} from 'immutable'
import * as actionTypes from './actionType'

const defaultState = Map({
  searchSongList: [],
  focusState: false
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SEARCH_SONG_LIST:
      return state.set('searchSongList', action.songList)
    case actionTypes.CHANGE_FOCUS_STATE:
        return state.set('focusState', action.state)
    default:
      return state
  }
}

export default reducer