import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { HeaderTitle, SongDetailLeftWrapper } from './style'

export default memo(function SongDetailLeft() {
  // props/state

  // redux
  const { songDetail } = useSelector((state) => ({
    songDetail: state.getIn(['songDetail', 'songDetailInfo', 'playlist']),
  }), shallowEqual)

  // other handle
  const coverPicUrl = songDetail && songDetail.coverImgUrl

  return (
    <SongDetailLeftWrapper>
      {/* 歌单详情头部 */}
      <HeaderTitle className="flex">
        <div className="conver-img">
          <img src={getSizeImage(coverPicUrl, 200)} alt=""/>
          <span className="image_cover"></span>
        </div>
      </HeaderTitle>
    </SongDetailLeftWrapper>
  )
})
