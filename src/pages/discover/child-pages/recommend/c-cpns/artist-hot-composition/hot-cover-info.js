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
      position: relative;
      color: #000;

      &::after {
        position: absolute;
        top: 2px;
        content: '';
        width: 11px;
        height: 13px;
      }
    }

    .artist-detail {
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
        <div className="artist-name">{info.name}</div>
        <div className="artist-detail">{info.position}</div>
      </div>
    </HotCoverInfoCover>
  )
})
