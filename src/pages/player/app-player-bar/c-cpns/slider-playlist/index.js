import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
import PlaylistItem from './c-cpns/playlist-item'
import {
  SliderPlaylistHeader,
  SliderPlaylistMain,
  SliderPlaylistWrapper,
} from './style'
import { ClearOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { getSongDetailAction } from '../../../store/actionCreator'

function SliderPlaylist(props) {
  // props/state
  const { isShowSlider, playlistCount, closeWindow, playMusic } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // redux hook
  const dispatch = useDispatch()
  const { currentSong, playList, currentSongIndex } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    }),
    shallowEqual
  )

  // other hook
  useEffect(() => {
    setCurrentIndex(currentSongIndex)
  }, [currentSongIndex])

  // other function Todo 
  // 清除全部歌曲
  const clearAllPlaylist = () => {
    // 清除当前歌曲列表
    // 清除本地存储歌曲id
    // console.log(currentSong.id)
    // playList.findIndex((item) => item.id)
  }

  //
  const clickItem = (index, item) => {
    setCurrentIndex(index)
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
              onClick={e => clearAllPlaylist()}
              className="header-icon"
            >
              <ClearOutlined />
              <span>清除全部</span>
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
          {playList.map((item, index) => {
            return (
              <PlaylistItem
                key={item.id}
                isActive={currentIndex === index ? 'active' : ''}
                songName={item.name}
                singer={item.ar[0].name}
                duration={item.dt}
                clickItem={() => clickItem(index, item)}
                songId={item.id}
              />
            )
          })}
        </div>
        <div className="main-line"></div>
        <div className="main-lyric">歌词展示</div>
      </SliderPlaylistMain>
    </SliderPlaylistWrapper>
  )
}

SliderPlaylist.propTypes = {
  isShowSlider: propTypes.bool.isRequired,
  playlistCount: propTypes.number.isRequired,
}

export default memo(SliderPlaylist)
