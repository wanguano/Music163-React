import React, { memo} from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { getSizeImage } from '@/utils/format-utils.js'
import { getSongDetailAction } from '@/pages/player/store'

import { SongItemWrapper } from './style'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

function SongItem(props) {
  // props/state
  const {
    currentRanking,
    coverPic,
    duration,
    singer,
    songId,
    songName,
    className = '',
  } = props

  // redux hook
  const dispatch = useDispatch()

  // other function
  const playMusic = (e,isTo = false) => {
    // 如果不跳转,那么组织超链接的默认行为
    if(!isTo) e.preventDefault()
    dispatch(getSongDetailAction(songId))
    // 播放音乐
    document.getElementById('audio').autoplay = true
  }

  return (
    <SongItemWrapper className={className} isPic={coverPic}>
      <div className="song-item rank-count">{currentRanking}</div>
      {coverPic && (
        <NavLink
          to="/discover/song"
          className="song-item"
          onClick={(e) => playMusic(e,true)}
        >
          <img src={getSizeImage(coverPic, 50)} alt="" />
        </NavLink>
      )}
      <div className="song-item song-info">
        <PlayCircleOutlined
          className="font-active"
          onClick={(e) => playMusic(e)}
        />
        <a href="/play" onClick={(e) => playMusic(e)} className="text-nowrap">
          {songName}
        </a>
      </div>
      <div className="song-item duration">{duration}</div>
      <NavLink
        to="/discover/song"
        className="song-item singer"
        onClick={(e) => playMusic(e,true)}
      >
        {singer}
      </NavLink>
    </SongItemWrapper>
  )
}

SongItem.propTypes = {
  currentRanking: propTypes.number.isRequired,
  coverPic: propTypes.string,
  duration: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  songId: propTypes.number.isRequired,
  className: propTypes.string,
  songName: propTypes.string.isRequired,
}

export default memo(SongItem)
