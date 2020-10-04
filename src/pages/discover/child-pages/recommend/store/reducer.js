import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

// 使用Immutable管理redux中的state (修改的`state`不会修改原有数据结构, 而是返回修改后新的数据结构)
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRaking: {},
  newRaking: {},
  originRaking: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_UP_RAKING:
      return state.set('upRaking', action.upRaking)
    case actionTypes.CHANGE_NEW_RAKING:
      return state.set('newRaking', action.newRaking)
    case actionTypes.CHANGE_ORIGIN_RAKING:
      return state.set('originRaking', action.originRaking)
    default:
      return state
  }
}

export default reducer
