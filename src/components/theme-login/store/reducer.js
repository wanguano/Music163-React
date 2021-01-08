import {Map} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = Map({
  isVisible: false,
  isLogin: false
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_IS_VISIBLE_STATE:
      return state.set('isVisible', action.isVisible)
    case actionTypes.CHANGE_IS_LOGIN_STATE:
      return state.set('isLogin', action.isLogin)
    default: 
      return state
  }
}

export default reducer