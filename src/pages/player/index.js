import React, { memo, useEffect, useState } from 'react'
import { SongDetailWrapper, SongLeft, SongRight } from './style'
import SongInfo from './child-pages/song-info'
import SongItem from './child-pages/song-item'
import SongComment from './child-pages/song-comment'
import { useGlobalKeyboardEvent } from '../../hooks/change-state'
import { getSimilaritySong } from '@/service/player'
import { shallowEqual, useSelector } from 'react-redux'
import { formatMinuteSecond } from '../../utils/format-utils'

// 歌曲详情页面
export default memo(function JMSongDetail(props) {
  // props/state  先写死: 167876    到时候换这个: props.location.state.id
  // 之后根路id发送请求,数据保存在redux当中
  const [songlist, setSonglist] = useState([])

  // redux
  const { currentSongId } = useSelector(
    (state) => ({
      currentSongId: state.getIn(['player', 'currentSong', 'id']),
    }),
    shallowEqual
  )

  // other hook
  useEffect(() => {
    getSimilaritySong(currentSongId).then((res) => {
      setSonglist(res.songs)
    })
  }, [currentSongId])

  // custom hook
  useGlobalKeyboardEvent() // 全局注册 ctrl+k 唤醒下拉框
  return (
    <SongDetailWrapper>
      <div className="content w980">
        <SongLeft>
          <SongInfo />
          <SongComment />
        </SongLeft>
        <SongRight>
          {/* <h2>SongInclude 包含音乐</h2>
          <h2>SongRelevant 相关音乐</h2>
          <h2>客户端下载</h2> */}
          {songlist &&
            songlist.map((item, index) => {
              return (
                <SongItem
                  key={item.id}
                  currentRanking={index + 1}
                  className="song_item"
                  // coverPic={index < 3?item.al.picUrl:''}
                  duration={formatMinuteSecond(item.dt)}
                  songName={item.name}
                  singer={item.artists[0].name}
                  songId={item.id}
                />
              )
            })}
        </SongRight>
      </div>
    </SongDetailWrapper>
  )
})
