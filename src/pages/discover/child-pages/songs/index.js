import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
  getCategory,
  getSongList,
  changeCurrentCategoryAction,
} from './store/actionCreators'
import { getQueryObject } from '@/utils/format-utils'
import HYSongsHeader from './c-cpns/songs-header'
import HYSongsList from './c-cpns/songs-list'
import { SongsWrapper } from './style'

export default memo(function HYSongs() {
  // props/state
  const { albumName } = getQueryObject()

  // redux
  const dispatch = useDispatch()
  const cat = useLocation().cat

  useEffect(() => {

    dispatch(changeCurrentCategoryAction(albumName || cat))
  }, [dispatch, cat, albumName])

  // hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <HYSongsHeader />
      <HYSongsList />
    </SongsWrapper>
  )
})
