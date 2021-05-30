import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

// 使用Immutable管理redux中的state (修改的`state`不会修改原有数据结构, 而是返回修改后新的数据结构)
const defaultState = Map({
  testBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGEE_BANNERS:
      return state.set('testBanners', action.banners)
    default:
      return state
  }
}

export default reducer
