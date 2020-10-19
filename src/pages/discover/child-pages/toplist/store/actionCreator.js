import * as actionTypes from './actionTypes'
import {getToplistInfo} from '@/service/toplist'

const changeToplistAction = (toplistInfo) => ({
  type: actionTypes.CHANGE_TOPLIST_COUNT,
  toplistInfo
})

// 榜单网络请求
export const getToplistInfoAction = () => {
  return dispatch => {
    getToplistInfo().then(res => {
      dispatch(changeToplistAction(res.list))
    })
  } 
}