import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  toplistInfo: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOPLIST_COUNT:
      return state.set('toplistInfo', action.toplistInfo)
    default: return state
  }
}

export default reducer