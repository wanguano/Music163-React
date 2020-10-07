import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils.js'
import styled from 'styled-components'

const HotCoverInfoCover = styled.div`
  display: flex;
  height: 50px;

  .artist-image {
    margin-right: 7px;
  }

  .artist-info {
    .artist-name {
      display: block;
      position: relative;
      color: #000;

      &::after {
        position: absolute;
        top: 2px;
        content: '';
        width: 11px;
        height: 13px;
        background: url(${require('@/assets/img/sprite_icon2.png')});
        background-position: 0 1px;
      }
    }

    .artist-detail {
      display: block;
      width: 160px;
      color: #666;
    }
  }
`

export default memo(function HotCoverInfo(props) {
  const { info } = props
  return (
    <HotCoverInfoCover>
      <div className="artist-image">
        <img src={getSizeImage(info.picUrl, 40)} alt="" />
      </div>
      <div className="artist-info">
        <a href={info.url} className="artist-name">{info.name}</a>
        <a href={info.url} className="artist-detail text-nowrap">{info.position}</a>
      </div>
    </HotCoverInfoCover>
  )
})
