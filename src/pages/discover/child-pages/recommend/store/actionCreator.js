import * as actionTypes from './actionTypes'

import { getTopBanners } from '@/service/recommend.js'

// 定义action返回一个对象
export const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners,
})

// react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用
export const getTopBannersAction = () => {
  return dispatch => {
    // 发送网络请求
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
