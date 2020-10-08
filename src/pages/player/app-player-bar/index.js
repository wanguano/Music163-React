import React, { memo, useEffect, useState, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils.js";
import { Slider } from 'antd'
import { Control, Operator, PlayerbarWrapper, PlayerInfo } from './stye'
import { getSongDetailAction } from '../store/actionCreator'

export default memo(function JMAppPlayerBar() {
  // props/state currentTime(用于保存当前播放的时间)
  const [currentTime, setCurrentTime] = useState(0)

  // redux hook
  const dispatch = useDispatch()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
  }), shallowEqual)

  // other hook
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  // other handle
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const songName = currentSong.name;
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt;
  console.log(currentSong)
  
  // other function
  function playSong() { // 播放音乐
    audioRef.current.src =getPlayUrl(currentSong.id)
    audioRef.current.play()
  }
  function timeUpdate(e) {
    console.log(e.target.currentTime*1000)
    setCurrentTime(e.target.currentTime*1000)
  }

  return (
    <PlayerbarWrapper className="sprite_player">
      <div className="w980 content">
        <Control>
          <button className="sprite_player pre"></button>
          <button className="sprite_player play" onClick={playSong}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayerInfo>
          <a href="#/" className="image">
            <img
              src={getSizeImage(picUrl, 35)}
              alt=""
            />
          </a>
          <div className="play-detail">
            <div className="song-info">
              <a href="/songDetail" className="song-name">
                {songName}
              </a>
              <a href="/author" className="singer-name">{singerName}</a>
            </div>
            <Slider defaultValue={30} />
          </div>
          <div className="song-time">
            <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
            <span className="total-time"> / {duration && formatDate(duration, 'mm:ss')}</span>
          </div>
        </PlayerInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist">2</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerbarWrapper>
  )
})
