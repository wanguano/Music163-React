import React, { memo } from 'react'
import propTypes from 'prop-types'
import { getSizeImage } from '@/utils/format-utils'
import { AlbumItemWrapper } from './style'

function SingerItem(props) {
  // props/state
  const { coverPic, singer } = props

  const picUrl = (coverPic && getSizeImage(coverPic, 130) ) || 'https://gitee.com/xmkm/cloudPic/raw/master/img/20210505140847.png'
  return (
    <AlbumItemWrapper>
      <div className="cover-pic">
        <img src={picUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <p className="singer-info">
        <span>{singer}</span>
        <i className="sprite_icon2 singer_icon"></i>
      </p>
    </AlbumItemWrapper>
  )
}

SingerItem.propTypes = {
  coverPic: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
}

export default memo(SingerItem)
