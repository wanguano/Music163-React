import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
import PlaylistItem from './c-cpns/playlist-item'
import {
  SliderPlaylistHeader,
  SliderPlaylistMain,
  SliderPlaylistWrapper,
} from './style'
import { ClearOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons'
import {
  changePlaylistAndCount,
  getSongDetailAction,
} from '../../../store/actionCreator'
import LyricContent from './c-cpns/lyric-content'

function SliderPlaylist(props) {
  // props/state
  const {
    isShowSlider,
    playlistCount,
    closeWindow,
    playMusic,
    changeSong,
  } = props

  // redux hook
  const dispatch = useDispatch()
  const { currentSong, playList, currentSongIndex } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex'])
    }),
    shallowEqual
  )

  // other function Todo
  // 清除全部歌曲
  const clearAllPlaylist = e => {
    e.preventDefault()
    playList.splice(0, playList.length)
    dispatch(changePlaylistAndCount(playList))
  }

  // 点击item播放音乐
  const clickItem = (index, item) => {
    // 播放音乐 dispatch
    dispatch(getSongDetailAction(item.id))
    playMusic()
  }

  return (
    <SliderPlaylistWrapper
      style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
      // 阻止事件冒泡
      onClick={e => e.stopPropagation()}
    >
      <SliderPlaylistHeader>
        <div className="playlist-header-left">
          <h3 className="header-title">播放列表({playlistCount})</h3>
          <div>
            <a
              href="/favorite"
              className="header-icon"
              onClick={e => e.preventDefault()}
            >
              <HeartOutlined />
              <span>收藏一下</span>
            </a>
            <a
              href="/clear"
              onClick={e => clearAllPlaylist(e)}
              className="header-icon"
            >
              <ClearOutlined />
              <span>清除播放列表</span>
            </a>
          </div>
        </div>
        <div className="playlist-header-right">
          <div className="song-name">{currentSong.name}</div>
          <div className="close-window" onClick={closeWindow}>
            <CloseOutlined />
          </div>
        </div>
      </SliderPlaylistHeader>
      <SliderPlaylistMain>
        <div className="main-playlist">
          {playList && playList.map((item, index) => {
            return (
              <PlaylistItem
                key={item.id}
                isActive={(currentSongIndex?currentSongIndex:0) === index ? 'active' : ''}
                songName={item.name}
                singer={item.ar[0].name}
                duration={item.dt}
                clickItem={() => clickItem(index, item)}
                songId={item.id}
                nextMusic={() => changeSong(1)}
              />
            )
          })}
        </div>
        <div className="main-line"></div>
        <LyricContent/>
      </SliderPlaylistMain>
    </SliderPlaylistWrapper>
  )
}

SliderPlaylist.propTypes = {
  isShowSlider: propTypes.bool.isRequired,
  playlistCount: propTypes.number.isRequired,
}

export default memo(SliderPlaylist)
