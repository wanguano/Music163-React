import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data.js'

import ArtistHeaderLine from '../artist-hot-composition/artist-header-line'
import HotCoverInfo from '../artist-hot-composition/hot-cover-info'
import { HotArtistWrapper } from './style'

export default memo(function HotArtist() {
  return (
    <HotArtistWrapper>
      <ArtistHeaderLine titleSlot="热门主播" />
      <div className="artist-container">
        {hotRadios.map(item => {
          return <HotCoverInfo key={item.picUrl} info={item} />
        })}
      </div>
    </HotArtistWrapper>
  )
})
