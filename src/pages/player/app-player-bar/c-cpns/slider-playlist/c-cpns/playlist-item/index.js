import React, { memo } from 'react'
import propTypes from 'prop-types'
import { formatDate } from '@/utils/format-utils.js'
import { DownloadOutlined,DeleteOutlined,GithubOutlined,LikeOutlined } from '@ant-design/icons'
import { PlaylistItemWrapper } from './style'

function PlaylistItem(props) {
  // props/state
  const {songName,singer, duration, isActive, clickItem, songId} = props

  // other function
  // 清除当前播放音乐
  const clearCurrentSong = (e) => {
    // 从当前播放列表删除此音乐,再dispatch
    e.stopPropagation()
    console.log(songId)
  }

  return (
    <PlaylistItemWrapper className={isActive} onClick={clickItem}>
      <div className="song-name">{songName}</div>
      <div className="control-and-singer">
        <LikeOutlined />
        <GithubOutlined />
        <DownloadOutlined />
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