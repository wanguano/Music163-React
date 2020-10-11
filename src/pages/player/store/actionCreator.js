import * as actionType from './actionType'
import { getSongDetail } from '@/service/player'
// 歌曲详情Action
const changeCurrentSongAction = currentSong => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong,
})

// 更改歌曲索引Action
const changeSongIndexAction = index => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index,
})

// 更改播放列表Action
const changPlayListAction = playList => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList,
})

// 歌曲详情network request
export const getSongDetailAction = idx => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(item => item.id === idx)

    // 2.判断是否找到歌曲
    if (songIndex !== -1) {// 找到歌曲

    }else {// 没找到歌曲
      console.log('没找到歌曲')
    }

    getSongDetail(idx).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}
