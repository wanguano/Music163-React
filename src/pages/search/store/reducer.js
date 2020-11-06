import {Map} from 'immutable'
import * as actionTypes from './actionType'

const defaultState = Map({
  singleSongList: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SEARCH_SONG_LIST:
      return state.set('singleSongList', action.songs)
    default:
      return state
  } 
}

export default reducer