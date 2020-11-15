import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import propTypes from 'prop-types'
import { getSongDetailAction } from '@/pages/player/store'
import { useAddPlaylist } from '@/hooks/change-music'

import { PlayCircleOutlined } from '@ant-design/icons'
import { SingleSongItemWrapper } from './style'
import { message } from 'antd'

function SingleSongItem(props) {
  // props/state
  const { songId, songName, singer, album, duration } = props

  // redux hook
  const dispatch = useDispatch()
  const { playlist } = useSelector((state) => ({
    playlist: state.getIn(['player', 'playList']),
  }))

  // 播放音乐
  const playMusic = () => {
    dispatch(getSongDetailAction(songId))
    document.getElementById('audio').autoplay = true
  }

  const addPlaylist = useAddPlaylist(playlist, message)

  return (
    <SingleSongItemWrapper>
      <div className="song-name">
        <PlayCircleOutlined onClick={() => playMusic()} />
        <em onClick={() => playMusic()}>{songName}</em>
        <button
          href="/discover/recommend"
          className="sprite_icon2 btn addto"
          onClick={(e) => addPlaylist(e, songId)}
        ></button>
      </div>
      <NavLink
        to="/discover/song"
        className="singer"
        onClick={() => playMusic()}
      >
        {singer}
      </NavLink>
      <div className="text-nowrap album">《{album}》</div>
      <div className="text-nowrap duration">{duration}</div>
    </SingleSongItemWrapper>
  )
}

SingleSongItem.propTypes = {
  songId: propTypes.number.isRequired,
  songName: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  album: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
}

export default memo(SingleSongItem)
