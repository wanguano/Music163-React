import * as actionTypes from './actionType'
import { getSongList } from '@/service/songs'

// 更改歌单Action
const changeSongListAction = (songList) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList
})

// 歌单network
export const getSongListAction = (limit,offset=0) => {
  return (dispatch) =>  {
    getSongList(limit,offset).then(res => {
      dispatch(changeSongListAction(res.playlists))
    })
  }
}