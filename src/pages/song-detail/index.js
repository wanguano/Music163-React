import React, {memo, useEffect,} from 'react'
import {useDispatch} from 'react-redux'
import qs from 'query-string'
import AppNavBar from '@/components/nav-bar/index'
import {SonglistContent, SonglistWrapper} from './style'
import {getSongDeailAction} from './store/actionCreator'
import SongDetailLeft from './child-pages/song-detail-left'
import SongDetailRight from './child-pages/song-detail-right'

export default memo(function JMSonglist(props) {
  // props/state
  const {songlistId} = qs.parse(props.location.search) // 获取传递得歌单ID,之后根据ID发生网络请求

  // redux hook
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getSongDeailAction(songlistId))
  }, [dispatch, songlistId])

  // JSX
  return (
    <SonglistWrapper>
      {/* 导航栏 */}
      <AppNavBar/>
      <SonglistContent>
        {/* 歌单左部 */}
        <SongDetailLeft/>
        {/* 歌单右部 */}
        <SongDetailRight/>
      </SonglistContent>
    </SonglistWrapper>
  )
})
