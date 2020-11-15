import { Map } from 'immutable'
import * as actionTypes from './actionType'

const defaultState = Map({
  singleSongList: [],
  singerList: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONG_LIST:
      return state.set('singleSongList', action.songs)
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.singerList)
    default:
      return state
  }
}

export default reducer
