import * as actionTypes from './actionTypes'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/service/recommend.js'

// 轮播图Action
export const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners,
})

// 热门推荐Action
export const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
})

// 新碟上架Action
export const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
})

// 飙升榜单
export const changeUpRaking = res => ({
  type: actionTypes.CHANGE_UP_RAKING,
  upRaking: res.playlist,
})
// 新歌榜单
export const changeNewRaking = res => ({
  type: actionTypes.CHANGE_NEW_RAKING,
  newRaking: res.playlist,
})
// 原创榜单
export const changeOriginRaking = res => ({
  type: actionTypes.CHANGE_ORIGIN_RAKING,
  originRaking: res.playlist,
})

// 发送网络请求将结果传递给派发的Action中 (react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用)
// 轮播图network request
export const getTopBannersAction = () => {
  return dispatch => {
    // 发送网络请求
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 热门推荐network request
export const getHostBannersAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 新碟上架network request
export const getNewAlbumsAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 榜单network request
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRaking(res))
          break
        case 2:
          dispatch(changeNewRaking(res))
          break
        case 3:
          dispatch(changeOriginRaking(res))
          break
        default:
      }
    })
  }
}
