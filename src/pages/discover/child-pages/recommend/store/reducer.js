import * as actionTypes from './actionTypes'
const defaultState = {
  topBanners: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, topBanners: action.topBanners }
    default:
      return { ...state }
  }
}

export default reducer