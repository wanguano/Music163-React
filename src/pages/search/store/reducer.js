import {Map} from 'immutable'
import * as actionTypes from './actionType'

const defaultState = Map({
  searchSongList: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SEARCH_SONG_LIST:
      return state.set('searchSongList', action.songs)
    default:
      return state
  } 
}

export default reducer