import * as actionType from './actionType'
import { getSongDetail, getLyric,getHotComment } from '@/service/player'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'
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
const changePlayListAction = playList => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList,
})

// 改变歌词Action
const changeLyricAction = lyric => ({
  type: actionType.CHANGE_LYRIC_LIST,
  lyric
})

// 改变热门评论Action
const changeHotComment = hotComments => ({
  type: actionType.CHANGE_HOT_COMMENT,
  hotComments
})

// 改变歌曲数量
const changePlayListCount = count => ({
  type: actionType.CHANGE_PLAY_LIST_COUNT,
  count
})

// 首次加载Action
export const changeFirstLoad = isFirstLoad => ({
  type: actionType.CHANGE_FIRST_LOAD,
  isLoad: isFirstLoad
})

// 改变currentLyricIndex
export const changeCurrentLyricIndexAction = index => ({
  type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

// 更改播放顺序Action
export const changePlaySequenceAction = sequence => ({
  type: actionType.CHANGE_PLAY_SEQUENCE,
  sequence,
})

// 切换歌曲Action
export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    // 根据playSequence决定是顺序播放还是随机播放
    const playSequence = getState().getIn(['player', 'playSequence'])
    // 播放列表
    const playList = getState().getIn(['player', 'playList'])
    // 当前播放的索引/下标
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

    // 根据播放顺序选择下一首音乐
    switch (playSequence) {
      case 1: // 随机播放
        // 生成一个随机数
        let random = getRandomNumber(playList.length)
        while (random === currentSongIndex) {
          random = getRandomNumber(playList.length)
        }
        // 更改当前播放音乐的下标
        currentSongIndex = random
        break
      default:
        // 顺序播放
        // 更改当前播放音乐的下标
        currentSongIndex += tag
        // 判断当前音乐的下标是否超出播放列表长度
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    // 获取需要播放的音乐
    const song = playList[currentSongIndex]
    // 更改当前播放的音乐
    dispatch(changeCurrentSongAction(song))
    dispatch(changeSongIndexAction(currentSongIndex))
    // 请求歌曲的歌词
    dispatch(getLyricAction(song.id))
  }
}

// 修改播放列表并修改歌曲数量
export const changePlaylistAndCount = playlist => {
  return dispatch => {
    dispatch(changePlayListAction(playlist))
    dispatch(changePlayListCount(playlist.length))
  }
}

// 歌曲详情network request
export const getSongDetailAction = idx => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => song.id === idx)
    let song = null
    // 2.判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      // 设置当前播放歌曲的currentIndex
      dispatch(changeSongIndexAction(songIndex))
      song = playList[songIndex]
      // 设置当前播放的歌曲
      dispatch(changeCurrentSongAction(song))
      // 请求歌曲的歌词
      dispatch(getLyricAction(idx))
    } else {
      // 没找到歌曲
      // 请求该歌曲的数据
      getSongDetail(idx).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // (1)添加到播放列表中
        playList.push(song)
        dispatch(changePlayListAction(playList))
        // (2)更改当前播放的索引
        const songIndex = playList.length - 1
        dispatch(changeSongIndexAction(songIndex))
        // (3)更改当前播放歌曲
        dispatch(changeCurrentSongAction(song))
        // (4)请求歌曲的歌词
        dispatch(getLyricAction(idx))
        // (5)更新歌曲数量
        dispatch(changePlayListCount(playList.length))
  })
    }
  }
}

// 歌词network request
export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then((res) => {
      const lyric = res.lrc && res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricAction(lyricList))
    })
  }
}

// 获取歌曲详情用于添加到播放列表
export const getAddSongDetailAction = id => {
  return (dispatch,getState) => {
    getSongDetail(id).then((res) => {
      const playList = getState().getIn(['player', 'playList'])
      // 先判断是已经存在播放列表,如果不存在,再进行添加
      const songIndex = playList.findIndex(song => song.id === id)
      if(songIndex !== -1) return // 找到了(后续不再执行)
      // 获取要添加播放的歌曲信息
      const willAddSong = res.songs && res.songs[0]
      // 添加到播放列表
      playList.push(willAddSong)
      // 派发action
      dispatch(changePlayListAction(playList))
      dispatch(changePlayListCount(playList.length))
    })
  }
}

// 获取歌曲热门评论
export const getHotCommentAction = id => {
  return dispatch => {
    getHotComment(id).then((res) => {
      const hotComments = res && res.hotComments 
      dispatch(changeHotComment(hotComments))
    })
  }
}
