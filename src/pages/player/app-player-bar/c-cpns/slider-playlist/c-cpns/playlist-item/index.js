import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'

import { formatDate, getPlayUrl } from '@/utils/format-utils.js'
import { removeSongId } from '@/utils/localstorage'
import { changePlaylistAndCount } from '@/pages/player/store/actionCreator.js'

import { DownloadOutlined,DeleteOutlined,GithubOutlined,LikeOutlined } from '@ant-design/icons'
import { PlaylistItemWrapper } from './style'
function PlaylistItem(props) {
  // props/state
  const {songName,singer, duration, isActive, clickItem, songId, nextMusic} = props

  // redux hook
  const dispatch = useDispatch()
  const {playList} = useSelector(state => ({
    playList: state.getIn(['player', 'playList'])
  }))

  // other function
  // 清除当前播放音乐
  const clearCurrentSong = (e) => {
    // 从当前播放列表删除此音乐,然后派发action
    e.stopPropagation()
    // 移除歌曲
    removeSongId(songId)
    const currentSongIndex = playList.findIndex(song => song.id===songId)
    if(playList.length === 1) return
    playList.splice(currentSongIndex, 1)
    dispatch(changePlaylistAndCount(playList))
    // 切换下一首音乐
    nextMusic()
  }

  return (
    <PlaylistItemWrapper className={isActive} onClick={clickItem}>
      <div className="song-name">{songName}</div>
      <div className="control-and-singer">
        <LikeOutlined />
        <GithubOutlined />
        <DownloadOutlined onClick={() => window.open(getPlayUrl(songId))} />
        <DeleteOutlined onClick={(e) => clearCurrentSong(e)} />
        <span>{singer}</span>
      </div>
      <div className="duration">{formatDate(duration, 'mm:ss')}</div>
    </PlaylistItemWrapper>
  )
}

PlaylistItem.propTypes = {
  songName: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  duration: propTypes.any.isRequired,
  isActive: propTypes.string
}

export default memo(PlaylistItem)