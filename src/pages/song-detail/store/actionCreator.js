// 将网络请求下的数派发到store中
// 调用API将数据保存在store
import * as actionTypes from './actionTypes'
import { getSongDeatilData } from '@/service/song-detail'

// 歌单详情 actioon
const changeSongDetailAction = (songDetail) => ({
  type: actionTypes.CHANGE_SONG_DETAIL,
  songDetail
})


// 歌单详情 network  (redux-thunk可以让action可以是一个函数)
export const getSongDeailAction = (songDeatilId) => {
  return async(dispatch) => {
    // 调用接口
    const result = await getSongDeatilData(songDeatilId)
    dispatch(changeSongDetailAction(result))
  }
}
