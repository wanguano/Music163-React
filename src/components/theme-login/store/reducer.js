import {Map} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = Map({
  isVisible: false,
  isLogin: false,// 登录状态
  profile: ''
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_IS_VISIBLE_STATE:
      return state.set('isVisible', action.isVisible)
    case actionTypes.CHANGE_USER_LOGIN_STATE:
      return state.set('isLogin', action.isLogin)
    case actionTypes.CHANGE_PROFILE_INFO:
      return state.set('profile', action.profile)
    default: 
      return state
  }
}

export default reducer