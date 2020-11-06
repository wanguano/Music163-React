import { getSearchSongData } from '@/service/theme-header.js'
import * as actionTypes from './actionType'

// 改变歌曲列表Action
const changeSongListAction = (songs) => ({
  type: actionTypes.CHANGE_SEARCH_SONG_LIST,
  songs
})

// 搜索歌曲列表Action
export const getSearchSongListAction = (songName, limit, type = 1) => {
  return (dispatch) => {
    getSearchSongData(songName, limit, type).then((res) => {
      const songs = res && res.result.songs
      dispatch(changeSongListAction(songs))
    })
  } 
}