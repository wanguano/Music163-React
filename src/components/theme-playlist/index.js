import React, { memo } from 'react'
import propTypes from 'prop-types'
import { PlatlistWrapper } from './style'
import SongItem from './children/song-item'

import { formatMinuteSecond } from '@/utils/format-utils.js'
function ThemePlaylist(props) {
  const playlist = props.playlist
  return (
    <PlatlistWrapper>
      <div className="main-header">
        <div className="sprite_table header-item"></div>
        <div className="sprite_table header-item header-title">标题</div>
        <div className="sprite_table header-item header-time">时长</div>
        <div className="sprite_table header-item header-singer">歌手</div>
      </div>
      <div className="main-list">
      {
            playlist && playlist.slice(0, 100).map((item,index) => {
              return   <SongItem 
              key={item.id}
              currentRanking={index+1} 
              className="song_item"
              coverPic={index < 3?item.al.picUrl:''}
              duration={formatMinuteSecond(item.dt)}
              songName={item.name}
              singer={item.ar[0].name}
              songId={item.id}
              />
            })
          }
      </div>
    </PlatlistWrapper>
  )
}

ThemePlaylist.propTypes = {
  playlist: propTypes.array.isRequired
}

export default memo(ThemePlaylist)