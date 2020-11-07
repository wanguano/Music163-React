import * as actionTypes from './actionTypes'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getSettleSinger,
} from '@/service/recommend.js'
import { getToplistDetail } from '@/service/toplist'

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
  // newAlbums: res.monthData, // 新接口数据
})

// 飙升榜单Action
export const changeUpRanking = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
// 新歌榜单Action
export const changeNewRanking = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
// 原创榜单Action
export const changeOriginRanking = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
})

// 入驻歌手Action
export const changeSettleSinger = res => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists,
})

// --------------------------------------------------------------
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
export const getNewAlbumsAction = () => {
  return dispatch => {
    getNewAlbums().then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 榜单详情 network
export const getTopListAction = idx => {
  return dispatch => {
    getToplistDetail(idx).then(res => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRanking(res))
          break
        case 3779629:
          dispatch(changeNewRanking(res))
          break
        case 2884035:
          dispatch(changeOriginRanking(res))
          break
        default:
      }
    })
  }
}

// 入驻歌手network request
export const getSettleSingerAction = limit => {
  return dispatch => {
    getSettleSinger(limit).then(res => {
      dispatch(changeSettleSinger(res))
    })
  }
}
