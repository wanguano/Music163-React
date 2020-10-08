import * as actionType from'./actionType'
import { getSongDetail } from "@/service/player";
// 歌曲详情Action
const changeCurrentSong = currentSong => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong
})


// 歌曲详情network request 
export const getSongDetailAction = idx => {
  return dispatch => {
    getSongDetail(idx).then(res => {
      dispatch(changeCurrentSong(res.songs[0]))
    })
  }
}