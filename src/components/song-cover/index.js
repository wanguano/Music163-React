import React, { memo } from 'react'
import { getCount } from '@/utils/format-utils'
import { SongCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

// 歌曲封面组件
function SongCover(props) {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-wrapper">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-title text-nowrap">by-{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongCoverWrapper>
  )
}

export default memo(SongCover)
