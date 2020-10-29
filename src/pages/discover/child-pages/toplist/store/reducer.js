import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  toplistInfo: [],
  currentIndex: 0,
  currentToplistId: 19723756,
  currentToplistTitleInfo: {},
  currentToplist: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOPLIST_COUNT:
      return state.set('toplistInfo', action.toplistInfo)
    case actionTypes.CHANGE_CURRENT_INDEX:
        return state.set('currentIndex', action.index)
    case actionTypes.CHANGE_CURRENT_TOPLIST_ID:
        return state.set('currentToplistId', action.id)
    case actionTypes.CHANGE_CURRENT_TOPLIST_TITLE_INFO:
        return state.set('currentToplistTitleInfo', action.titleInfo)
    case actionTypes.CHANGE_CURRENT_TOPLIST:
        return state.set('currentToplist', action.toplist)
    default: return state
  }
}

export default reducer