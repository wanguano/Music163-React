import React, { memo } from 'react'
import {ArtistHeaderLine, SingerCover} from '../artist-hot-composition'
import { SettleSingerWrapper } from './style'

export default memo(function SettleSinger() {
  return (
    <SettleSingerWrapper>
      <ArtistHeaderLine titleSlot='入驻歌手' rightSlot="查看全部 >" />
      <SingerCover/>
    </SettleSingerWrapper>
  )
})
