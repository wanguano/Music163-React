import React, { memo } from 'react'
import propTypes from 'prop-types'
import { getSizeImage } from '@/utils/format-utils'
import { AlbumItemWrapper } from './style'

function SingerItem(props) {
  // props/state
  const { coverPic, singer } = props

  return (
    <AlbumItemWrapper>
      <div className="cover-pic">
        <img src={getSizeImage(coverPic, 130)} alt="" />
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
