import * as actionTypes from './actionTypes'
import { getToplistInfo, getToplistDetail } from '@/service/toplist'

// 改变榜单数据Action
const changeToplistAction = (toplistInfo) => ({
  type: actionTypes.CHANGE_TOPLIST_COUNT,
  toplistInfo,
})

// 改变当前索引Action
export const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index,
})

// 改变当前歌单的ID_Action
export const changeCurrentToplistIdAction = (id) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_ID,
  id,
})

// 改变榜单标题详情Action
const changeToplistTitleInfo = (titleInfo) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST_TITLE_INFO,
  titleInfo,
})

// 改变不同榜单列表Action
const changeCurrentToplist = (toplist) => ({
  type: actionTypes.CHANGE_CURRENT_TOPLIST,
  toplist,
})

// 榜单network
export const getToplistInfoAction = () => {
  return (dispatch) => {
    getToplistInfo().then((res) => {
      dispatch(changeToplistAction(res.list))
    })
  }
}

// 榜单标题信息 network
export const getToplistTitleInfoAction = (id) => {
  return (dispatch) => {
    getToplistDetail(id).then((res) => {
      // 取出榜单标题详情信息
      const {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      } = res && res.playlist
      const toplistTitleInfo = {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      }
      dispatch(changeToplistTitleInfo(toplistTitleInfo))
    })
  }
}

// 榜单列表详情信息 network
export const getToplistItemAction = (id) => {
  return (dispatch) => {
    getToplistDetail(id).then((res) => {
        // 榜单列表详情信息
      const currentToplist = res && res.playlist && res.playlist.tracks
      dispatch(changeCurrentToplist(currentToplist))
    })
  }
}
