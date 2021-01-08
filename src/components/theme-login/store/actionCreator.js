import * as actionTypes from './actionTypes'
// 更改登录框显示
export const changeIsVisible = (visibleState) => ({
  type: actionTypes.CHANGE_IS_VISIBLE_STATE,
  isVisible: visibleState
})