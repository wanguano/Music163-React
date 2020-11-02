import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { SETTLE_SINGER_COUNT } from '@/common/constants.js'

import { getSettleSingerAction } from '../../store/actionCreator'
import { ArtistHeaderLine, SingerCover } from '../artist-hot-composition'
import { SettleSingerWrapper } from './style'

export default memo(function SettleSinger() {
  // redux hook
  const { settleSinger } = useSelector(
    state => ({
      settleSinger: state.getIn(['recommend', 'settleSinger']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getSettleSingerAction(SETTLE_SINGER_COUNT))
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <ArtistHeaderLine titleSlot="入驻歌手" rightSlot="查看全部 >" />
      <div className="singer-container">
        {settleSinger && settleSinger.map(item => {
          return <SingerCover key={item.id} info={item} />
        })}
      </div>
    </SettleSingerWrapper>
  )
})
